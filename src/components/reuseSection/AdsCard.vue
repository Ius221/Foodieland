<template>
  <div class="ads">
    <h3>
      Don't forget to eat <br />
      healthy food
    </h3>
    <img class="star" :src="star" alt="" />
    <img class="plate" :src="plate" alt="" />
    <p>www.foodieland.com</p>
  </div>
</template>

<script>
import star from "@/assets/otherImg/Star.png";
import plate from "@/assets/otherImg/foodPlate.png";
export default {
  data() {
    return {
      star,
      plate,
    };
  },
};
</script>

<style scoped>
.ads {
  height: 43.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
  background-image: linear-gradient(to top, #1d483b, #357355);
  position: relative;
}
.star {
  position: absolute;
  top: -30%;
}
.plate {
  position: absolute;
  top: 21%;
  z-index: 1;
}
h3 {
  margin-top: 4rem;
  font-family: "Lobster", sans-serif;
  text-align: center;
  font-size: 2.4rem;
  color: #fff;
  z-index: 1;
  font-weight: 400;
}
p {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.6);
  padding-bottom: 3.2rem;
  z-index: 1;
}
</style>
