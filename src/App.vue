<template>
  <div class="modal-demo">
    <modal-basic></modal-basic>  
  </div>
</template>
<script>
import basic from './components/example/modal-basic.vue'
export default {
  name: 'app',
  components: {
    'modal-basic':basic,  
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
