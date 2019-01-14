import vueModaltor from "./vue-modaltor.vue";
const modalTor = {
  install(Vue, options) {
    Vue.component("vue-modaltor", vueModaltor, options);
  }
};
export default modalTor;
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(modalTor);
}
