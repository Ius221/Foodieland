<template>
  <the-container>
    <div class="outer-all">
      <div class="top">
        <heading-primary class="head"> Our Recipes </heading-primary>
        <the-para class="para"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
          error.</the-para
        >
        <div class="search-box">
          <input
            type="text"
            @input="searchRecipes"
            placeholder="Search recipes..."
          />
          <button type="submit" @click="searchRecipes">Search</button>
        </div>
      </div>
      <div class="recipe-lists grid cols--3">
        <div class="recipes-cont" v-for="(rec, ind) in currRecipe" :key="ind">
          <router-link :to="`/recipe/${rec.id}`" class="inner-recipes">
            <div class="recipe--img-container">
              <img class="recipe-img" :src="rec.imgpath" />
            </div>
            <h4>{{ rec.title }}</h4>
            <the-para class="food-desc"
              >{{ rec.desc.split(" ").slice(0, 4).join(" ") }}...</the-para
            >
            <div class="tag-type">
              <div class="icons">
                <img :src="clock" alt="" class="svg-icon" />
                <the-para class="icon-para">{{ rec.prepTime }}</the-para>
              </div>
              <div class="icons">
                <img :src="fork" alt="" class="svg-icon" />
                <the-para class="icon-para">{{ rec.type }}</the-para>
              </div>
            </div>
          </router-link>
        </div>
        <div class="pagination">
          <router-link
            v-if="parseInt($route.params.recipeNum) > 1"
            :to="prev()"
            class="pg-no"
          >
            <img class="svg-icon" :src="left" alt="" />
          </router-link>
          <router-link :to="`/recipe/page/1`"
            ><div
              class="pg-no"
              :class="{
                active:
                  $route.params.recipeNum == 1 || !$route.params.recipeNum,
              }"
            >
              1
            </div></router-link
          >
          <router-link :to="`/recipe/page/2`"
            ><div
              class="pg-no"
              :class="{ active: $route.params.recipeNum == 2 }"
            >
              2
            </div></router-link
          >
          <router-link :to="`/recipe/page/3`"
            ><div
              class="pg-no"
              :class="{ active: $route.params.recipeNum == 3 }"
            >
              3
            </div></router-link
          >
          <router-link :to="`/recipe/page/4`"
            ><div
              class="pg-no"
              :class="{ active: $route.params.recipeNum == 4 }"
            >
              4
            </div></router-link
          >
          <router-link :to="`/recipe/page/5`"
            ><div
              class="pg-no"
              :class="{ active: $route.params.recipeNum == 5 }"
            >
              5
            </div></router-link
          >
          <router-link
            v-if="parseInt($route.params.recipeNum) < 5"
            :to="next()"
            class="pg-no"
          >
            <img class="svg-icon" :src="right" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </the-container>
</template>

<script>
import right from "@/assets/svg/right.png";
import left from "@/assets/svg/left.png";
import clock from "@/assets/svg/clock.png";
import fork from "@/assets/svg/forkKnife.png";
export default {
  data() {
    return {
      clock,
      fork,
      right,
      left,
      allRecipe: null,
      currRecipe: null,
    };
  },
  methods: {
    routerWatch(route) {
      const routeNo = route.params.recipeNum;
      const recipeSlices = {
        1: [0, 6],
        2: [6, 12],
        3: [12, 18],
        4: [18, 24],
        5: [24, 30],
      };

      if (recipeSlices[routeNo]) {
        const [start, end] = recipeSlices[routeNo];
        this.currRecipe = this.$store.state.recipe.recipes.slice(start, end);
      }
    },
    next() {
      const currentPage = parseInt(this.$route.params.recipeNum) || 1;
      return `/recipe/page/${currentPage + 1}`;
    },
    prev() {
      const currentPage = parseInt(this.$route.params.recipeNum) || 1;
      return currentPage > 1
        ? `/recipe/page/${currentPage - 1}`
        : `/recipe/page/1`;
    },
    searchRecipes(data) {
      const search = data.target.value;
      this.currRecipe = this.allRecipe.filter((abc) =>
        abc.title.toLowerCase().includes(search.toLowerCase())
      );
    },
  },
  created() {
    this.routerWatch(this.$route);
    this.allRecipe = this.$store.state.recipe.recipes;
  },
  watch: {
    $route(newRoute) {
      this.routerWatch(newRoute);
    },
  },
};
</script>
<style class="scoped">
.grid {
  display: grid;
  gap: 4rem;
}
.cols--3 {
  grid-template-columns: repeat(3, 1fr);
}
</style>

<style scoped>
/*  top heading & search box */
.top {
  margin: 8rem auto;
}
.para {
  text-align: center;
  margin-top: 2.4rem;
  margin-bottom: 8rem;
}
.search-box {
  border: none;
  height: 8rem;
  width: 70rem;
  margin: 0 auto;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  border-radius: 2.4rem;
}
input:focus {
  border: none;
  outline: none;
}
input {
  border-radius: 2.4rem;
  border: none;
  padding: 3rem;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.4rem;
  width: 100%;
  height: 100%;
}
button {
  background-color: #000;
  height: 6rem;
  width: 16rem;
  border: none;
  transition: all 0.3s;
  font-size: 1.4rem;
  cursor: pointer;
  border-radius: 16px;
  margin-right: 10px;
  font-weight: 600;
  color: #fff;
}
button:hover {
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: #e7f9fd;
}

/* all-lists */
a:link,
a:visited {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s;
}
a:hover .recipe-img,
a:active .recipe-img {
  transform: scale(1.1);
}
h4 {
  font-size: 2.4rem;
}
.food-desc {
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
}
.inner-recipes {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.recipe--img-container {
  width: 40rem;
  height: 25rem;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}
.recipe-img {
  width: 120%;
  position: absolute;
  top: -10%;
  left: -10%;
  transition: all 0.3s;
}
.tag-type {
  display: flex;
  gap: 2rem;
}
.icons {
  display: flex;
  align-items: center;
  gap: 5px;
}
.svg-icon {
  width: 2.5rem;
  height: 2.5rem;
}

.pagination {
  grid-column: 1/-1;
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  margin-top: 8rem;
}
.active {
  background-color: #000 !important;
  color: #fff !important;
}
.pg-no {
  display: flex;
  justify-content: center;
  border-radius: 1.6rem;
  font-size: 1.8rem;
  font-weight: 600;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 6.4rem;
  transition: all 0.3s;
  width: 6.4rem;
}
.pg-no:hover {
  background-color: #e7f9fd;
  border-color: #000;
}
</style>
