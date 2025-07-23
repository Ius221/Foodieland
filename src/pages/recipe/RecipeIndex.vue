<template>
  <the-container></the-container>
</template>

<script>
export default {
  created() {
    const id = this.$route.params.recipeId;
    const allRecipe = this.$store.state.recipe.recipes;
    const currRecipe = allRecipe.find((abc) => abc.id == id);
    console.log(id, currRecipe);
  },
};
</script>

<style></style>
