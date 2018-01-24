// this is a comment for pull
import vueModaltor from './vue-modaltor.vue';
const modalTor =  {
  install(Vue, options) {
    Vue.component('vue-modaltor',vueModaltor)

  }
};
export default modalTor
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(modalTor)
}