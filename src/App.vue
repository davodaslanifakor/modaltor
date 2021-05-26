<template>
<div>
  <vue-modaltor :visible="modal1" @hideModal="modal1 = false">
   <template #body>
     hello im modal
     hello im modal
     hello im modal
     hello im modal
     hello im modal
     hello im modal
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
