import vueModaltor from "./components/vue-modaltor.vue";
const modalTor = {
    install(Vue, options) {
        let component = vueModaltor;
        for (let k in options) {
            // eslint-disable-next-line no-prototype-builtins
            if (component.props.hasOwnProperty(k)) {
                component.props[k].default = options[k];
            }
        }
        Vue.component("vue-modaltor", component);
    }
};
if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(modalTor);
}
export default modalTor;
