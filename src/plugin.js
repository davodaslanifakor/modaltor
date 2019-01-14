import vueModaltor from "./vue-modaltor.vue";
const modalTor = {
  install(Vue, options) {
    let component = vueModaltor;
    for (let k in options) {
      if (component.props.hasOwnProperty(k)) {
        component.props[k].default = options[k];
      }
    }
    Vue.component("vue-modaltor", component);
  }
};
export default modalTor;
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(modalTor);
}
