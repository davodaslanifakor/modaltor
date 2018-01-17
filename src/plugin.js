import vueModaltor from './vue-modaltor.vue';
// const modalTor =  {
//   install: function (Vue, options) {
//     if (typeof window !== 'undefined' && window.Vue) {
//       window.Vue.use(vueModaltor)
//     }

//   }
// };
function install(Vue){
   Vue.component('vue-modaltor', vueModaltor);

}
vueModaltor.install = install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default vueModaltor