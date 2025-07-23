<template>
  <the-container>
    <div class="text-container">
      <heading-primary>{{ currBlog.foodName }}</heading-primary>
      <div class="person-detail">
        <img class="face-img" :src="currBlog.humanFace" alt="" />
        <div class="name">{{ currBlog.name }}</div>
        <div class="date">{{ currBlog.date }}</div>
      </div>
      <the-para class="para">
        {{ currBlog.desc }}
      </the-para>
    </div>
    <div class="img-container">
      <img class="food-img" :src="currBlog.foodImage" alt="" />
    </div>
    <div class="blog">
      <div class="qa">
        <div class="innerQA" v-for="n in 5" :key="n">
          <heading-tertiary class="question"
            >How did you start out in the food industry?</heading-tertiary
          >
          <div class="img-box" v-if="n === 3">
            <img class="img-inside" :src="currBlog.foodImage" alt="" />
          </div>
          <the-para class="ans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem
            porro commodi necessitatibus. Hic dolor aut quos illum quidem
            laborum fuga. Eum delectus non nesciunt culpa sunt esse tenetur
            optio.
          </the-para>
          <div class="thought" v-if="n === 4">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi"
            non.
          </div>
        </div>
      </div>
      <div class="links">
        <h4>SHARE THIS ON:</h4>
        <router-link to="#"
          ><img class="icon-link" src="../../../assets/svg/fb.png" alt="fb"
        /></router-link>
        <router-link to="#"
          ><img
            class="icon-link"
            src="../../../assets/svg/twitter.png"
            alt="twitter"
        /></router-link>
        <router-link to="#"
          ><img
            class="icon-link"
            src="../../../assets/svg/insta.png"
            alt="insta"
        /></router-link>
      </div>
    </div>
    <callto-action />
    <the-gallery class="marbot" />
  </the-container>
</template>

<script>
export default {
  data() {
    return {
      currBlog: null,
    };
  },
  created() {
    const id = this.$route.params.blogId;
    const allBlog = this.$store.state.blog.blogs;
    this.currBlog = allBlog.find((abc) => abc.id == id);
    console.log(id, this.currBlog);
  },
};
</script>

<style scoped>
.text-container {
  margin: 8rem auto 6.4rem 0;
  text-align: center;
}
.person-detail {
  margin: 3.2rem auto 4.8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.face-img {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}
.name {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0 6.4rem 0 1.6rem;
}
.date {
  color: rgba(0, 0, 0, 0.6);
  padding-left: 2.4rem;
}
.para {
  margin: 4.8rem auto 6.3rem auto;
}
.img-container {
  height: 60rem;
  width: 128rem;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  border-radius: 3rem;
}
.food-img {
  width: 100%;
  top: -30%;
  left: 0%;
  position: absolute;
}
.blog {
  display: flex;
  justify-content: center;
  margin: 8rem auto 9.6rem auto;
  gap: 5rem;
}
.qa {
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  width: 92rem;
}

.innerQA {
  display: flex;
  flex-direction: column;
}

.ans,
.question,
.img-box {
  margin: 0 4rem;
}
.ans {
  margin-top: 2.4rem;
}
.thought {
  margin-top: 6.4rem;
  padding: 4.8rem 4rem;
  font-size: 3.6rem;
  font-style: italic;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), #fff);
}

.img-box {
  margin: 3.2rem 4rem 0.8rem 4rem;
  border-radius: 2rem;
  height: 40rem;
  overflow: hidden;
  width: 84rem;
  position: relative;
}
.img-inside {
  position: absolute;
  width: 100%;
}
.links {
  width: 13rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: center;
  /* margin-left: 5rem; */
}
h4 {
  font-size: 1.4rem;
  text-transform: uppercase;

  font-weight: 600;
}
.icon-link {
  height: 2.2rem;
  width: 2.2rem;
}
.marbot {
  margin-bottom: 16rem;
}
</style>
