<template>
<div>
  <vue-modaltor :visible="true">
    hello im modal
  </vue-modaltor>
</div>
</template>

<script>

import vueModaltor from "./components/vue-modaltor"
export default {
  name: 'App',
  components: {
    vueModaltor
  }
}
</script>
