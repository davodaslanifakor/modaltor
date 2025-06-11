import vueModaltor from "./components/vue-modaltor.vue";
const modalTor = {
    install(app, options = {}) {
        const component = vueModaltor;
        for (let k in options) {
            if (Object.prototype.hasOwnProperty.call(component.props, k)) {
                component.props[k].default = options[k];
            }
        }
        app.component("vue-modaltor", component);
    }
};
export default modalTor;
