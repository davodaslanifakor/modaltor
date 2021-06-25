<template>
<div>
  <button @click="modal1 = true">open modal</button>

  <vue-modaltor :visible="modal1" default-width="150px"
                animation-parent='scale'
                @hideModal="modal1 = false"
                animation-panel="slide-right"
                :close-scroll="true"
  >
   <template #body>
     “Never forget what you are,
     for surely the world will not.
     Make it your strength. Then it can never be your weakness.
     Armour yourself in it, and it will never be used to hurt you.
     ” ― George R.R. Martin, A Game of Thrones.
     “Never forget what you are,
     for surely the world will not.
     Make it your strength. Then it can never be your weakness.
     Armour yourself in it, and it will never be used to hurt you.
     ” ― George R.R. Martin, A Game of Thrones.
     “Never forget what you are,
     for surely the world will not.
     Make it your strength. Then it can never be your weakness.
     Armour yourself in it, and it will never be used to hurt you.
     ” ― George R.R. Martin, A Game of Thrones.
     “Never forget what you are,
     for surely the world will not.
     Make it your strength. Then it can never be your weakness.
     Armour yourself in it, and it will never be used to hurt you.
     ” ― George R.R. Martin, A Game of Thrones.
     “Never forget what you are,
     for surely the world will not.
     Make it your strength. Then it can never be your weakness.
     Armour yourself in it, and it will never be used to hurt you.
     ” ― George R.R. Martin, A Game of Thrones.
     “Never forget what you are,
     for surely the world will not.
     Make it your strength. Then it can never be your weakness.
     Armour yourself in it, and it will never be used to hurt you.
     ” ― George R.R. Martin, A Game of Thrones.
   </template>
    <template #footer>
    hello im footer
    </template>
  </vue-modaltor>
</div>
</template>

<script>

import vueModaltor from "./components/vue-modaltor"
export default {
  name: 'App',
  components: {
    vueModaltor
  },
  data() {
    return {
      modal1: false,
    }
  }
}
</script>
