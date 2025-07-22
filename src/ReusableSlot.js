import TheContainer from "./ui/TheContainer.vue";
import HeadingPrimary from "./ui/HeadingPrimary.vue";
import HeadingTertiary from "./ui/HeadingTertiary.vue";
import CalltoAction from "./components/reuseSection/CalltoAction.vue";
import TheGallery from "./components/reuseSection/TheGallery.vue";
import AdsCard from "./components/reuseSection/AdsCard.vue";
import ThePara from "./ui/ThePara.vue";

export default function reusableComponent(app) {
    app.component('TheContainer', TheContainer);
    app.component('HeadingPrimary', HeadingPrimary);
    app.component('HeadingTertiary', HeadingTertiary);
    app.component('CalltoAction', CalltoAction);
    app.component('TheGallery', TheGallery);
    app.component('ThePara', ThePara);
    app.component('AdsCard', AdsCard);
}