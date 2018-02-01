# vue-modaltor

 vue modal component for vuejs and i hope it be useful for everyone ... 

you can see example usages here
[Demo](https://davodaslanifakor.github.io/modaltor)

# Features
* no need to handle modal's height manually it extends as the content of modal increases .
* manage modal's size on diffrent dimenstions with one single attribute  
[see responsive](https://davodaslanifakor.github.io/modaltor#responsive)
* scrollable modal, modal will get scroll if conntent is more than current view page height 
[see close-scroll](https://davodaslanifakor.github.io/modaltor#close-scroll)
* modals has multiple parent animations 
[parent-animation](https://davodaslanifakor.github.io/modaltor#animation-parent)


# Installation

``` NPM
npm install vue-modaltor --save
```

``` YARN
yarn add vue-modaltor
```

then you can import modaltor like this ...

```js
import Vue from 'vue'
import VueModalTor from 'vue-modaltor'
Vue.use(VueModalTor)
```

if you are not using any build system you can include it in your project

```html
  <script src="/vue-modaltor/dist/vue-modaltor.js"></script>
```

# Example 
```html
 <vue-modaltor  :visible="open" @hide="hideModal">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </vue-modaltor>
  <button @click="open=true">modal-basic</button>

```
```js
  var app = new Vue({
      el: '#app',
      data: {
          open: false
      },
      methods: {
          hideModal() {
              this.open = false
          }
      }
  })
```
# Props config

```js
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
    // this is for anaimating modal 
    // :animation-panel='modal-slide-right'
    // :animation-panel='modal-slide-left'
    // :animation-panel='modal-slide-top'
    // :animation-panel='modal-slide-bottom'
    animationPanel:{
      type: String,
      required: false,
      default: 'modal-fade'
    },
    // this is for anaimating animationParent modal 
    // :animation-parent='modal-scale'
    animationParent:{
      type: String,
      required: false,
      default: 'modal-fade'
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
    }
  },

```

# TODO List
- [ ] multiple animations on diffrent device size
- [ ] 3D Animations
