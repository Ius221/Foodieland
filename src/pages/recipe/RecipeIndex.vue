<template>
  <the-container>
    <div class="outer-all">
      <div class="top-heading">
        <heading-primary class="head">
          {{
            currRecipe.title.split(" ").slice(0, 3).join(" ")
          }}</heading-primary
        >
        <div class="person-details">
          <div class="rec-box">
            <img class="face-icon" :src="currRecipe.imgpath" alt="" />
            <div class="person">
              <div class="name">Lorem, ipsum</div>
              <div class="date">15 march 2020</div>
            </div>
          </div>
          <div class="rec-box">
            <img class="small-icon" :src="clock" alt="" />
            <div class="person">
              <div class="time">prep time</div>
              <div class="date">10 minutes</div>
            </div>
          </div>
          <div class="rec-box">
            <img class="small-icon" :src="clock" alt="" />
            <div class="person">
              <div class="time">cook time</div>
              <div class="date">10 minutes</div>
            </div>
          </div>
          <div class="rec-box">
            <img class="small-icon" :src="fork" alt="" />
            <div class="date">chicken</div>
          </div>
        </div>
      </div>
      <div class="print-share">
        <div class="print-container">
          <div class="sm-cont">
            <img class="small-icon" :src="print" alt="" />
          </div>
          <p class="print-text">Print</p>
        </div>
        <div class="print-container">
          <div class="sm-cont">
            <img class="small-icon" :src="share" alt="" />
          </div>
          <p class="print-text">Share</p>
        </div>
      </div>
      <div class="recipe-img--container">
        <img class="recipe-img" :src="currRecipe.imgpath" alt="" />
      </div>
    </div>
  </the-container>
</template>

<script>
import print from "@/assets/svg/print.png";
import share from "@/assets/svg/share.png";
import HeadingPrimary from "../../ui/HeadingPrimary.vue";
import clock from "@/assets/svg/clock.png";
import fork from "@/assets/svg/forkKnife.png";
export default {
  components: { HeadingPrimary },
  data() {
    return {
      clock,
      print,
      share,
      fork,
      currRecipe: null,
    };
  },
  created() {
    const id = this.$route.params.recipeId;
    const allRecipe = this.$store.state.recipe.recipes;
    this.currRecipe = allRecipe.find((abc) => abc.id == id);
    console.log(id, this.currRecipe);
  },
};
</script>

<style scoped>
.outer-all {
  padding-top: 8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.top-heading {
  grid-column: 1/3;
  /* background-color: #f00; */
}
.head {
  text-align: start;
}
.small-icon {
  height: 2.4rem;
  width: 2.4rem;
  margin-right: 1.6rem;
}
.face-icon {
  height: 5rem;
  margin-right: 1.6rem;
  border-radius: 50%;
  width: 5rem;
}
.name {
  font-size: 1.6rem;
  font-weight: 700;
}
.time {
  font-size: 1.2rem;
  letter-spacing: 1.1px;
  font-weight: 500;
  text-transform: uppercase;
}
.date {
  margin-top: 8px;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: capitalize;
}

.person-details {
  margin: 4.8rem 0 6.4rem 0;
  display: flex;
}
.rec-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.rec-box:first-child {
  justify-content: start;
}
.rec-box:last-child {
  border: none;
}

.print-share {
  display: flex;
  gap: 3.2rem;
  align-items: center;
  justify-self: end;
}
.sm-cont {
  background-color: #e7fafe;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
}
.sm-cont img {
  margin: 0;
}
.print-container {
  cursor: pointer;
}
.print-container:hover .sm-cont.small-icon {
  transform: scaleY(1.1);
}
.print-text {
  text-align: center;
  margin-top: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-size: 1.2rem;
}
.recipe-img--container {
  grid-column: 1/3;
  background-color: red;
  position: relative;
  overflow: hidden;
  border-radius: 3rem;
  height: 60rem;
}
.recipe-img {
  position: absolute;
  top: -15%;
  width: 100%;
}
</style>
