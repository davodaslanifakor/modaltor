# vue-modaltor

# Changelog

All notable changes to [this](changelog.md) project will be documented in this file.

vue modal component for vuejs and i hope it be useful for everyone ...

you can see example usages here 

 [![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/63vvr24qn)

# Features

- no need to handle modal's height manually it extends as the content of modal increases .
- manage modal's size on different dimensions with one single attribute [see responsive](https://davodaslanifakor.github.io/modaltor#responsive)
- scrollable modal, modal will get scroll if content is more than current view page height [see close-scroll](https://davodaslanifakor.github.io/modaltor#close-scroll)
- modals has multiple parent animations [parent-animation](https://davodaslanifakor.github.io/modaltor#animation-parent)
- edit icon close svg or icon font [parent-animation](https://davodaslanifakor.github.io/modaltor#svg)
- hide icon close [parent-animation](https://davodaslanifakor.github.io/modaltor#show-close-button)

# Installation

```NPM
npm install vue-modaltor --save
```

```YARN
yarn add vue-modaltor
```

then you can import modaltor in

### VUE2

```js
import Vue from "vue";
import VueModalTor from "vue-modaltor/dist/vue-modaltor.common";
import "vue-modaltor/dist/vue-modaltor.css";

Vue.use(VueModalTor, {
    bgPanel: "#7957d5"  // add custome options
});
```

### NUXT-SSR
in  file ```/plugins/modal.js```
```js
import Vue from "vue"
import VueModalTor from "vue-modaltor/dist/vue-modaltor.common.js"
import "vue-modaltor/dist/vue-modaltor.css"
Vue.use(VueModalTor)
```
then add plugins part in ```nuxt.config.js```
```js
plugins: [
    "~/plugins/modal.js"
]
```

# Also, can use CDN
[![](https://data.jsdelivr.com/v1/package/npm/vue-modaltor/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vue-modaltor)

And check it this [issues](https://github.com/davodaslanifakor/modaltor/issues/13) 

# Example

```vue
<template>
  <div>
    <vue-modaltor :visible="open" @hide="open=false">
      <template #header>
      <!--    add your custom header     -->
        <div>
          <i class="close-icon">x</i>
          <p>add modal title or not</p>
        </div>
      </template>
      <template #body>
          <p>
            “Never forget what you are,
            for surely the world will not. 
            Make it your strength. Then it can never be your weakness.
            Armour yourself in it, and it will never be used to hurt you.
            ” ― George R.R. Martin, A Game of Thrones.
          </p>
        </template>
    </vue-modaltor>
    <button @click="open=true">modal-basic</button>
  </div>
</template>
<script>
export default {
    name: "YourComponentName",
    data() {
        return {
          open: false
        }
    }
}
</script>

```

# Props

```vue
<script>
  export default {
    props: {
      // this is for toggle show modal
      // :visible:false
      visible: {
        type: Boolean,
        required: false,
        default: false
      },
      // this is for responsive modal and
      // :resize-width='{1200:"50%",992:"70%",768:"90%"}'
      resizeWidth:{
        type:Object,
      },
      // this is for animating modal
      // :animation-panel='slide-right'
      // :animation-panel='slide-left'
      // :animation-panel='slide-top'
      // :animation-panel='slide-bottom'
      animationPanel:{
        type: String,
        required: false,
        default: 'modal-fade'
      },
      // this is for animating animationParent modal
      // :animation-parent='scale'
      animationParent:{
        type: String,
        required: false,
        default: 'modal-fade'
      },
      // this is for color overlay
      bgOverlay:{
        type: String,
        required: false,
        default: '#fff'
      },
      // this is for color panel
      bgPanel:{
        type: String,
        required: false,
        default: '#fff'
      },
      //set default width modal
      // :default-width="'50%'"
      // :default-width="'495px'"
      // :default-width="'40em'"
      defaultWidth:{
        type: String,
        required: false,
        default: '50%'
      },
      // this is option for close scroll body when show modal
      // :close-scroll="false"  // if true close scroll body
      closeScroll:{
        type: Boolean,
        required: false,
        default: true
      },
      // this. for padding right scroll body 
      // when modal is open and has scroll when closeScroll is true
      spaceScroll:{
        type: String,
        required: false,
        default: "15px"
      }
    }
  }
</script>
```


# Slots

    #header
        - create your own header

    #body 
        - create your own body




# TODO List

- [x] Add custom slot for header , body and footer
