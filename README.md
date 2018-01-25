# vue-modaltor

 vue modal component for vuejs and i hope it be useful for everyone . 

## Installation

``` NPM
npm install vue-modaltor --save
```

``` YARN
yarn add vue-modaltor
```

you can see example usages here
[Demo](https://davodaslanifakor.github.io/modaltor)


then you can import modaltor like this ...


```javascript
import Vue from 'vue'
import VueModalTor from 'vue-modaltor'
Vue.use(VueModalTor)
```

if you are no using any build system you can include it in your project like this : 

```javascript
  <script src="/vue-modaltor/dist/vue-modaltor.js"></script>
```

#Example 
```javascript
     <vue-modaltor  :visible="open" @hide="hideModal">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </vue-modaltor>
      <button @click="open=true">modal-basic</button>

    <script>
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
    </script>
```