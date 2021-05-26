<template>
  <div class="modaltor"
       :class="[animationParent,{'modaltor--show' : open}]"
       v-show="isOpen">
    <div
        :class="['modaltor__overlay']"
        @click="$emit('hide')"
        :style="{backgroundColor:bgOverlay}"
    ></div>
    <div
        :class="['modaltor__panel',animationPanel,{'modaltor__panel--show':open}]"
        :style="{width:width,backgroundColor:bgPanel}"
    >
      <slot name="header">
        <div class="modaltor__header">
          <div class="modaltor__close" @click="hiddenModal">
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
        </div>
      </slot>
        <slot name="body">
          <div class="modaltor__content">
          </div>
        </slot>
    </div>
  </div>
</template>

<script>
import "./vue-modaltor.scss"

export default {
  name: "modaltor-perfect",
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
      }
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.openModal();
      } else {
        if (this.closeScroll) {
          this._unlockBody();
        }
        this.open = false;
        setTimeout(() => (this.isOpen = false), 300);
      }
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  },
  destroyed() {
    if (this.open) {
      if (this.closeScroll) {
        this._unlockBody();
      }
      this.open = false;
      setTimeout(() => (this.isOpen = false), 300);
    }
  },
  mounted() {
    this.$nextTick(function () {
      if (this.visible) {
        this.openModal();
      }
      window.addEventListener("resize", this.getWindowWidth);
      window.addEventListener("resize", this.getWindowHeight);
      this.getWindowWidth();
      this.getWindowHeight();
    });
  },
  methods: {
    hiddenModal(){
      this.$emit("hide")
    },
    openModal() {
      this.isOpen = true;
      setTimeout(() => (this.open = true), 30);
      if (this.closeScroll) {
        this._lockBody();
      }
    },
    getWindowHeight() {
      this.windowHeight = document.documentElement.clientHeight;
    },
    getWindowWidth() {
      if (this.resizeWidth && Object.keys(this.resizeWidth).length > 0) {
        this.windowWidth = document.documentElement.clientWidth;
        var filter = Object.keys(this.resizeWidth).find(
            f => f >= this.windowWidth
        );
        if (filter) {
          this.width = this.resizeWidth[filter];
        } else {
          this.width = this.defaultWidth;
        }
      }
    },
    _lockBody() {
      this.backups.body.height = document.body.style.height;
      this.backups.body.overflow = document.body.style.overflow;
      document.body.style.paddingRight = "15px";
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    },
    _unlockBody() {
      document.body.style.height = this.backups.body.height;
      document.body.style.overflow = this.backups.body.overflow;
      document.body.style.paddingRight = this.backups.body.paddingRight;
    }
  }
};
</script>
