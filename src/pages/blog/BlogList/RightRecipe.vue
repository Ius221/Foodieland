<template>
  <div class="right-recipe">
    <h2>Tasty Recipes</h2>
    <router-link to="#">
      <div v-for="(recipe, ind) in recipes.slice(0, 3)" :key="ind">
        <router-link class="recipe-list" :to="`/recipe/${recipe.id}`">
          <div class="img-container">
            <img :src="recipe.imgpath" alt="" />
          </div>
          <div class="recipe-text">
            <h4 class="recipe-name">
              {{ recipe.title.split(" ").slice(1, 3).join(" ") }}
            </h4>
            <the-para>By {{ recipe.name }}</the-para>
          </div>
        </router-link>
      </div>
    </router-link>

    <ads-card />
  </div>
</template>

<script>
export default {
  props: ["incomData"],
  data() {
    return {
      recipes: null,
    };
  },
  methods: {
    watchRoute(data) {
      if (data == null) this.recipes = this.$store.state.recipe.recipes;
      else
        this.recipes = this.$store.state.recipe.recipes.filter(
          (abc) => abc.id != data
        );
    },
  },
  created() {
    this.watchRoute(this.incomData);
  },
  watch: {
    incomData(newData) {
      this.watchRoute(newData);
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
  font-weight: 600;
}
h4 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
}
.recipe-list {
  display: flex;
  margin-bottom: 4rem;
  cursor: pointer;
  gap: 2.4rem;
  align-items: center;
}
.right-recipe {
  height: 12rem;
  width: 40rem;
}
.img-container {
  height: 12rem;
  width: 18rem;
  border-radius: 3rem;
  position: relative;
  overflow: hidden;
}
img {
  transition: all 0.3s;
  position: absolute;
  top: -10%;
  right: -15%;
  width: 120%;
  z-index: -1;
}

.recipe-list:hover img {
  transform: scale(1.1);
}
a:link,
a:visited {
  color: inherit;
  text-decoration: inherit;
}
</style>
