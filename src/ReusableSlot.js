import TheContainer from "./ui/TheContainer.vue";
import HeadingPrimary from "./ui/HeadingPrimary.vue";
import CalltoAction from "./components/reuseSection/CalltoAction.vue";

export default function reusableComponent(app) {
    app.component('TheContainer', TheContainer);
    app.component('HeadingPrimary', HeadingPrimary);
    app.component('CalltoAction', CalltoAction);
}