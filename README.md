# vue-modaltor

 vue modal component for vuejs and i hope it be useful for everyone . 

## Installation

``` bash
npm install vue-modaltor --save
```

you can see example usages here
[Demo](https://davodaslanifakor.github.io/modaltor)


then you can import modaltor like this, also there is a living example in hello directory

```javascript
import VueModalTor from 'vue-modaltor'
Vue.use(VueModalTor)
```

if you are no using any build system you can include it in your project like this : 
```javascript
  <script src="/vue-modaltor/dist/vue-modaltor.js"></script>
```

#Example 
```javascript
     <vue-modaltor  :visibel="open" @hide="hideModal" :defaultWidth="'40%'" >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </vue-modaltor>
      <button @click="open = true">{{open}} modal-basic</button>

    <script>
    var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
            open:false
    
  },
  
   methods:{
      hideModal(){
        this.open = false
      }
    }
})
    </script>
```