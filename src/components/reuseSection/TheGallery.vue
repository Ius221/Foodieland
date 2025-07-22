<template>
  <the-container>
    <div class="gallery">
      <h3>Check out the delicious recipe</h3>
      <div class="grid">
        <div class="col" v-for="(food, ind) in foodList" :key="ind">
          <div
            class="like-conainter"
            :class="{ liked: foodList[ind].liked }"
            @click="toggleLike(ind)"
          >
            &#10084;
          </div>
          <div class="img-container">
            <img class="image" :src="food.imgpath" alt="food simage" />
          </div>
          <p class="recipe-name">{{ food.title }}</p>
          <div class="time-type">
            <div class="time">
              <img class="svg-icon" :src="clock" alt="clock" />
              <p>{{ food.time }}</p>
            </div>
            <div class="time">
              <img class="svg-icon" :src="knife" alt="clock" />
              <p>{{ food.type }}</p>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </the-container>
</template>

<script>
import clock from "@/assets/svg/clock.png";
import knife from "@/assets/svg/forkKnife.png";

export default {
  data() {
    return {
      clock,
      knife,
      foodList: [
        {
          liked: false,
          imgpath: new URL("@/assets/foodImages/img--1.png", import.meta.url)
            .href,
          title: "Spicy Paneer Delight with Garlic Twist",
          time: "25 Minutes",
          type: "South Indian",
        },
        {
          liked: true,
          imgpath: new URL("@/assets/foodImages/img--2.png", import.meta.url)
            .href,
          title: "Creamy Mushroom Curry Served with Jeera Rice",
          time: "40 Minutes",
          type: "Fusion",
        },
        {
          liked: false,
          imgpath: new URL("@/assets/foodImages/img--3.png", import.meta.url)
            .href,
          title: "Traditional Rajasthani Dal Baati",
          time: "50 Minutes",
          type: "Rajasthani",
        },
        {
          liked: true,
          imgpath: new URL("@/assets/foodImages/img--4.png", import.meta.url)
            .href,
          title: "Tandoori Veg Platter with Mint Chutney",
          time: "35 Minutes",
          type: "Punjabi",
        },
      ],
    };
  },
  methods: {
    toggleLike(index) {
      this.foodList[index].liked = !this.foodList[index].liked;
      console.log(this.foodList[index]);
    },
  },
};
</script>

<style scoped>
h3 {
  margin-bottom: 8rem;
  font-size: 3.6rem;
  text-align: center;
  font-weight: 600;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
}
.img-container {
  border-radius: 2rem;
  overflow: hidden;
  height: 20rem;
  position: relative;
  width: 29rem;
}
.col {
  position: relative;
  max-width: 29rem;
}
.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.recipe-name {
  margin: 1.6rem 0 2.4rem 0;
  font-size: 1.8rem;
  font-weight: 600;
}
.time-type {
  gap: 2.4rem;
  display: flex;
  align-items: center;
}

.time {
  display: flex;
  align-items: center;
}
.time p {
  margin-left: 10px;
}
.svg-icon {
  height: 2.4rem;
  width: 2.4rem;
}
.like-conainter {
  position: absolute;
  z-index: 2;
  background-color: #fff;
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  right: 5%;
  top: 5%;
  color: #aaa;
  font-size: 2.4rem;
}

.liked {
  color: #f00;
}
</style>
