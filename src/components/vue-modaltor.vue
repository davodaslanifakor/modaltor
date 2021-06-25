<template>
  <div
      v-show="isOpen"
      class="modaltor"
      :class="[animationParent, { 'modaltor--show': open }]"
  >
    <div
        :class="['modaltor__overlay']"
        :style="{ backgroundColor: bgOverlay }"
        @click="emitHideModal"
    ></div>
    <div
        :class="[
        'modaltor__panel',
        animationPanel,
        { 'modaltor__panel--show': open }
      ]"
        :style="{ width: width, backgroundColor: bgPanel }"
    >
      <div class="modaltor__header">
        <slot name="header">
          <div class="modaltor__close" @click="emitHideModal">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="20"
                height="20"
                xml:space="preserve"
            >
              <path
                  class="st0"
                  fill="#010110"
                  d="M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"
              />
            </svg>
          </div>
        </slot>
      </div>
      <div class="modaltor__content">
        <slot name="body"> </slot>
      </div>
      <div class="modaltor__footer" v-if="$slots.footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
import "./vue-modaltor.scss"

export default {
  name: "ModaltorPerfect",
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    },
    resizeWidth: {
      type: Object
    },
    animationPanel: {
      type: String,
      required: false,
      default: "modal__fade"
    },
    bgOverlay: {
      type: String,
      required: false,
      default: "#fff"
    },
    bgPanel: {
      type: String,
      required: false,
      default: "rgba(255, 255, 255, 0.57)"
    },
    animationParent: {
      type: String,
      required: false,
      default: "modal__fade"
    },
    defaultWidth: {
      type: String,
      required: false,
      default: "80%"
    },
    closeScroll: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      width: this.defaultWidth || "80%",
      open: false,
      isOpen: false,
      backups: {
        body: {
          height: null,
          overflow: null,
          paddingRight: null
        }
      },
      timout: null
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.openModal()
      } else {
        this.hiddenModal()
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth)
  },
  destroyed() {
    this.destroyModal()
  },
  mounted() {
    this.$nextTick(function () {
      if (this.visible) {
        this.openModal()
      }
      window.addEventListener("resize", this.getWindowWidth)
      this.getWindowWidth()
    })
  },
  methods: {
    clearTimoutModal(){
      clearTimeout(this.timout)
    },
    emitHideModal() {
      this.$emit("hideModal")
    },
    finishHiddenModal() {
      this.$emit("finishHidden")
    },
    destroyModal() {
      if (this.open) {
        if (this.closeScroll) {
          this._unlockBody()
        }
        this.open = false
        this.clearTimoutModal()
        this.timout = setTimeout(() => (this.isOpen = false), 300)
      }
    },
    hiddenModal() {
      if (this.closeScroll) {
        this._unlockBody()
      }
      this.open = false
      this.clearTimoutModal()
      this.timout = setTimeout(() => {
        this.isOpen = false
        this.finishHiddenModal()
      }, 300)
    },
    openModal() {
      this.isOpen = true
      this.clearTimoutModal()
      this.timout = setTimeout(() => (this.open = true), 30)
      if (this.closeScroll) {
        this._lockBody()
      }
    },
    getWindowWidth() {
      if (this.resizeWidth && Object.keys(this.resizeWidth).length > 0) {
        this.windowWidth = document.documentElement.clientWidth
        const filter = Object.keys(this.resizeWidth).find(
            (f) => f >= this.windowWidth
        )
        if (filter) {
          this.width = this.resizeWidth[filter]
        } else {
          this.width = this.defaultWidth
        }
      }
    },
    _hasScrollbar() {
      return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
    },
    _lockBody() {
      if (this._hasScrollbar()) {
        this.backups.body.height = document.body.style.height
        this.backups.body.overflow = document.body.style.overflow
        document.body.style.paddingRight = "15px"
        document.body.style.height = "100%"
        document.body.style.overflow = "hidden"
      }
    },
    _unlockBody() {
      if (this._hasScrollbar()) {
        document.body.style.height = this.backups.body.height
        document.body.style.overflow = this.backups.body.overflow
        document.body.style.paddingRight = this.backups.body.paddingRight
      }
    }
  }
}
</script>
