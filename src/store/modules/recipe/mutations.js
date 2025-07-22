export default {
    toggleLike(state, ind) {
        state.recipes[ind].liked = !state.recipes[ind].liked;
    }
};