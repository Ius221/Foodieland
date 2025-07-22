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
      blogs: [
        {
          foodImage: new URL("@/assets/blogImages/img--1.png", import.meta.url)
            .href,
          humanFace: new URL("@/assets/uiFaces/img_1.jpg", import.meta.url)
            .href,
          foodName: "Spaghetti Carbonara",
          desc: "A creamy pasta dish made with eggs, cheese, pancetta, and pepper, originating from Rome, Italy.",
          name: "Lroem Ipsum",
          date: "12 November 2021",
        },
        {
          foodImage: new URL("@/assets/blogImages/img--2.png", import.meta.url)
            .href,
          humanFace: new URL("@/assets/uiFaces/img_2.jpg", import.meta.url)
            .href,
          foodName: "Margherita Pizza",
          desc: "Classic Neapolitan pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
          name: "Jane Doe",
          date: "5 January 2022",
        },
        {
          foodImage: new URL("@/assets/blogImages/img--3.png", import.meta.url)
            .href,
          humanFace: new URL("@/assets/uiFaces/img_3.jpg", import.meta.url)
            .href,
          foodName: "Chicken Biryani",
          desc: "A flavorful Indian rice dish cooked with marinated chicken, aromatic spices, and saffron.",
          name: "John Smith",
          date: "20 February 2022",
        },
        {
          foodImage: new URL("@/assets/blogImages/img--4.png", import.meta.url)
            .href,
          humanFace: new URL("@/assets/uiFaces/img_4.jpg", import.meta.url)
            .href,
          foodName: "Sushi Platter",
          desc: "An assortment of sushi rolls and nigiri made with vinegared rice, seafood, and vegetables.",
          name: "Alice Johnson",
          date: "3 March 2022",
        },
        {
          foodImage: new URL("@/assets/blogImages/img--5.png", import.meta.url)
            .href,
          humanFace: new URL("@/assets/uiFaces/img_5.jpg", import.meta.url)
            .href,
          foodName: "Avocado Toast",
          desc: "Toasted sourdough bread topped with smashed avocado, chili flakes, and a drizzle of olive oil.",
          name: "Robert Brown",
          date: "17 April 2022",
        },
        {
          foodImage: new URL("@/assets/blogImages/img--6.png", import.meta.url)
            .href,
          humanFace: new URL("@/assets/uiFaces/img_6.jpg", import.meta.url)
            .href,
          foodName: "Ramen Bowl",
          desc: "Japanese noodle soup with a rich broth, tender pork, soft-boiled egg, and fresh vegetables.",
          name: "Emily Davis",
          date: "25 May 2022",
        },
      ],
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
