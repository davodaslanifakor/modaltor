import vueModaltor from "./components/vue-modaltor.vue";
const modalTor = {
    install(app, options) {
        const component = vueModaltor;
        for (const k in options) {
            // eslint-disable-next-line no-prototype-builtins
            if (component.props.hasOwnProperty(k)) {
                component.props[k].default = options[k];
            }
        }
        app.component("vue-modaltor", component);
    }
};

export default modalTor;
