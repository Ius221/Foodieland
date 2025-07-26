<template>
  <div class="main-container">
    <div class="upper-half">
      <h3>Ingredients</h3>
      <h4>Main Ingredients</h4>
      <div class="check-list" v-for="(ing, ind) in mIng" :key="ind">
        <input type="checkbox" :id="ind" v-model="checkedMain[ind]" />
        <label :for="ind" :class="{ checked: checkedMain[ind] }">{{
          ing.item
        }}</label>
      </div>
      <h4>Side Ingredients</h4>
      <div class="check-list" v-for="(ing, ind) in sIng" :key="ind">
        <input type="checkbox" :id="ind + 6" v-model="checkedSide[ind]" />
        <label :for="ind + 6" :class="{ checked: checkedSide[ind] }">{{
          ing.item
        }}</label>
      </div>
    </div>
    <div class="other-half">
      <h3>Ingredients</h3>
      <div class="uncheck-list" v-for="(ing, ind) in direction" :key="ind">
        <div class="blank-div">&nbsp;</div>
        <div class="other-content">
          <h4 class="actual">{{ ind + 1 }}. {{ ing.title }}</h4>
          <the-para class="supporting">
            {{ ing.description }}
          </the-para>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mIng", "sIng", "direction"],
  data() {
    return {
      checkedMain: Array(this.mIng?.length || 0).fill(false),
      checkedSide: Array(this.sIng?.length || 0).fill(false),
    };
  },
};
</script>

<style scoped>
h3 {
  font-size: 3.6rem;
  font-weight: 600;
}
h4 {
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 4.8rem;
}

.check-list {
  display: flex;
  align-items: center;
  padding: 3.2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
label {
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 2.4rem;
}
.checked {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: line-through;
}
input[type="checkbox"] {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: 1px solid #dbe2e5;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;
  background: #fff;
  transition: border-color 0.2s;
}
input[type="checkbox"]:checked {
  border: none;
}
input[type="checkbox"]:checked::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2.4rem;
  height: 2.4rem;
  background: #000;
  border-radius: 50%;
  z-index: 1;
}
input[type="checkbox"]:checked::after {
  content: "";
  position: absolute;
  left: 0.7rem;
  top: 0.4rem;
  width: 0.7rem;
  height: 1.2rem;
  border: solid #fff;
  border-width: 0 0.3rem 0.3rem 0;
  border-radius: 0.2rem;
  transform: rotate(45deg);
  z-index: 2;
}
</style>
<style scoped>
.uncheck-list {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 2.4rem;
}
.blank-div {
  height: 2.4rem;
  width: 2.4rem;
  margin-top: 4.8rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1.2rem;
  border-radius: 50%;
}
.other-half {
  margin-top: 8rem;
}
.other-content {
  margin: 4.8rem 0;
}
.supporting {
  margin-top: 2.4rem;
}
.actual {
  margin: 0;
}
</style>
