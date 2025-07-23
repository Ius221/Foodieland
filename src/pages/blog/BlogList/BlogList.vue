<template>
  <the-container>
    <div class="text-content">
      <heading-primary class="head"> Blog & Article </heading-primary>
      <the-para class="para"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
        error.</the-para
      >
      <div class="search-box">
        <input
          type="email"
          name="mail"
          @input="searchRecipes"
          placeholder="Search article, news or recipe..."
        />
        <button type="submit" @click="searchRecipes">Search</button>
      </div>
    </div>
    <div class="list-items">
      <the-blogs class="blogs" :word="word" />
      <right-recipe class="right-recipe" />
      <div class="pagination">
        <router-link to="#"
          ><div class="pg-no"><img class="icon" :src="left" alt="" /></div
        ></router-link>
        <router-link to="#"><div class="pg-no active">1</div></router-link>
        <router-link to="#"><div class="pg-no">2</div></router-link>
        <router-link to="#"><div class="pg-no">3</div></router-link>
        <router-link to="#"><div class="pg-no">4</div></router-link>
        <router-link to="#"><div class="pg-no">5</div></router-link>
        <router-link to="#"
          ><div class="pg-no">
            <div class="pg-no">
              <img class="icon" :src="right" alt="" />
            </div></div
        ></router-link>
      </div>
    </div>
  </the-container>

  <callto-action />
</template>

<script>
import TheBlogs from "./TheBlogs.vue";
import RightRecipe from "./RightRecipe.vue";
import right from "@/assets/svg/right.png";
import left from "@/assets/svg/left.png";
export default {
  components: {
    TheBlogs,
    RightRecipe,
  },
  data() {
    return {
      searchRecipe: "",
      word: "",
      right,
      left,
    };
  },
  methods: {
    searchRecipes(data) {
      this.word = data.target.value;
    },
  },
};
</script>

<style scoped>
.text-content {
  margin: 8rem 0;
}
.head {
  margin-bottom: 2.4rem;
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
.para {
  margin-bottom: 8rem;
  text-align: center;
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
.list-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
}
.blogs {
  grid-column: 1/3;
}
.pagination {
  grid-column: 1/-1;
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  margin-top: 8rem;
}
.active {
  background-color: #000;
  color: #fff;
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
.icon {
  border-radius: 16px;
  height: 12px;
  width: 12px;
}
.right-recipe {
  height: 100rem;
}
a:link,
a:visited {
  color: #000;
  text-decoration: none;
}
</style>
