<template>
  <the-container class="gap">
    <div class="flex-gap">
      <div class="notFound" v-if="filterBlock.length === 0">
        <img class="notFoundImg" :src="notFound" alt="" />
        <div class="notFoundText">no blogs & article found</div>
      </div>
      <div v-else v-for="(blog, ind) in filterBlock" :key="ind">
        <router-link :to="`/blog/${blog.id}`" class="lists">
          <div class="img-container">
            <img class="food-img" :src="blog.foodImage" alt="" />
          </div>
          <div class="blog-text">
            <heading-tertiary>{{ blog.foodName }}</heading-tertiary>
            <the-para class="para">
              {{ blog.desc }}
            </the-para>
            <div class="person-details">
              <img :src="blog.humanFace" alt="" class="icon" />
              <h4>{{ blog.name }}</h4>
              <div class="date">{{ blog.date }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </the-container>
</template>

<script>
import notFound from "@/assets/svg/notFound.png";
export default {
  props: ["word"],
  data() {
    return {
      notFound,
      blogs: this.$store.state.blog.blogs,
    };
  },
  computed: {
    filterBlock() {
      if (!this.word) return this.blogs.slice(0, 6);
      return this.blogs.filter((blog) =>
        blog.foodName.toLowerCase().includes(this.word.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.lists {
  height: 20rem;
  align-items: center;
  display: flex;
  gap: 4rem;
}
.img-container {
  height: 20rem;
  width: 29rem;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
}
.food-img {
  top: -5%;
  width: 100%;
  transition: all 0.3s;
  position: absolute;
  z-index: -1;
}
.icon {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}
.para {
  padding: 1.6rem 0 3.2rem 0;
}
.person-details {
  display: flex;
  align-items: center;
}
h4 {
  padding: 0 2.4rem 0 1.6rem;
  font-size: 1.6rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.date {
  margin-left: 2.4rem;
  font-size: 1.4rem;
  text-transform: capitalize;
}
.flex-gap {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}
.notFoundImg {
  height: 5rem;
  width: 5rem;
  filter: brightness(0) saturate(100%) invert(18%) sepia(95%) saturate(5000%);
}

.notFoundText {
  font-size: 2.4rem;
  color: #f00;
  font-weight: 600;
  text-transform: capitalize;
}
.notFound {
  display: flex;
  align-items: center;
  gap: 2rem;
}
a:link,
a:visited {
  color: inherit;
  text-decoration: inherit;
}

a:hover .food-img,
a:active .food-img {
  transform: scale(1.1);
}
</style>
