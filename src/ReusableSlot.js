import TheContainer from "./ui/TheContainer.vue";
import HeadingPrimary from "./ui/HeadingPrimary.vue";

export default function reusableComponent(app) {
    app.component('TheContainer', TheContainer);
    app.component('HeadingPrimary', HeadingPrimary);
}