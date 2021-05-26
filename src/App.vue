<template>
<div>
  <vue-modaltor :visible="modal1" @hide="modal1 = false">
   <template #body>
     hello im modal
     hello im modal
     hello im modal
     hello im modal
     hello im modal
     hello im modal
   </template>
  </vue-modaltor>
  <button @click="modal1 = true">
    open modal
  </button>
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
      modal1: false
    }
  },
}
</script>
