<template>
  <the-container class="gap">
    <div class="flex-gap">
      <div class="lists" v-for="(blog, ind) in blogs" :key="ind">
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
      </div>
    </div>
  </the-container>
</template>

<script>
export default {
  data() {
    return {
      blogs: this.$store.state.blog.blogs,
    };
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
  border-right: 1px solid rgba(0, 0, 0, 1);
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
</style>
