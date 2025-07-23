<template>
  <the-container class="cta-box">
    <div class="cta">
      <div class="cta-text">
        <h2>Deliciousness to your inbox</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          consequuntur sed maxime odit, eum ea in expedita debitis optio, magni
          repudiandae voluptatum itaque aut at ab saepe numquam voluptatem
          reiciendis.
        </p>
        <form class="register" action="#">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address..."
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <img :src="choppedImg" alt="chopped food" class="left-img img" />
      <img :src="herb" alt="Rucola" class="herb" />
      <img :src="plateImg" alt="chopped food" class="right-img img" />
    </div>
  </the-container>
</template>

<script>
import choppedImg from "@/assets/otherImg/chopped.png";
import herb from "@/assets/svg/rucola-png.png";
export default {
  data() {
    return {
      choppedImg,
      herb,
      plateImg: new URL("@/assets/otherImg/Photo_plate.png", import.meta.url)
        .href,
    };
  },
};
</script>

<style scoped>
.cta-box {
  margin: 16rem auto;
}
.cta {
  background-color: #e7f9fd;
  border-radius: 6rem;
  overflow: hidden;
  position: relative;
}
.cta-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 33rem;
}
h2 {
  font-size: 4.8rem;
  font-weight: 600;
  letter-spacing: -0.192px;
  text-align: center;
}
p {
  margin: 2.4rem 0 6.4rem 0;
  font-size: 1.6rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
}
.register {
  background-color: #fff;
  width: 48rem;
  height: 8rem;
  display: flex;
  box-sizing: content-box;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  border-radius: 2.4rem;
}
input {
  border-radius: 2.4rem;
  border: none;
  width: 100%;
  color: rgba(0, 0, 0, 0.4);
  padding: 3rem;
  font-size: 1.4rem;
}
button {
  background-color: #000;
  color: #fff;
  height: 6rem;
  width: 16rem;
  border-radius: 1.6rem;
  margin: 1rem;
  margin-left: 0;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.4rem;
  font-weight: 600;
}
button:hover {
  background-color: #e7f9fd;
  color: #000;
  border: 1px solid #000;
}

img {
  position: absolute;
}
.right-img {
  bottom: -35%;
  right: -10%;
}
.left-img {
  bottom: -25%;
  left: -8%;
  transform: rotate(33deg);
}
.herb {
  top: 54%;
  right: 17%;
}
</style>
