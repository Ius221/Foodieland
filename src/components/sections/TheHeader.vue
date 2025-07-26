<template>
  <div class="header">
    <div class="name">Foodieland<span>.</span></div>
    <div class="navigation">
      <ul>
        <li>
          <router-link
            class="nav-link"
            to="/"
            :class="{ active: route.path === '/' }"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/recipe/01"
            :class="{ active: isActive('/recipe') }"
            >Recipe</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/blog"
            :class="{ active: isActive('/blog') }"
            >Blog</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/contact"
            :class="{ active: isActive('/contact') }"
            >Contact</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-link"
            to="/about"
            :class="{ active: isActive('/about') }"
            >About us</router-link
          >
        </li>
      </ul>
    </div>
    <div class="logos">
      <router-link to="#"
        ><img class="icon-link" src="../../assets/svg/fb.png" alt="fb"
      /></router-link>
      <router-link to="#"
        ><img
          class="icon-link"
          src="../../assets/svg/twitter.png"
          alt="twitter"
      /></router-link>
      <router-link to="#"
        ><img class="icon-link" src="../../assets/svg/insta.png" alt="insta"
      /></router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const isActive = (base) =>
  route.path === base || route.path.startsWith(base + "/");
</script>

<style scoped>
.header {
  display: flex;
  padding: 0 8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
}

/* TITILE */
.name {
  font-family: "Lobster", sans-serif;
  font-size: 2.4rem;
}
.name span {
  color: #f00;
}

/* MIDDLE LINKS */
ul {
  list-style-type: none;
  color: #000;
  display: flex;
  flex-direction: row;
  gap: 6rem;
}
li {
  padding: 4rem 0;
}
.nav-link:link,
.nav-link:visited {
  text-decoration: none;
  color: #000;
  padding: 4rem 0;
  font-size: 1.6rem;
  transition: all 0.3s;
}

/* LAST LINKS */
.icon-link {
  font-size: 2.2rem;
  height: 2.2rem;
  width: 2.2rem;
}
.logos {
  display: flex;
  gap: 4rem;
}

.active:link,
.active:visited {
  padding-bottom: 2px;
  text-decoration: underline;
  font-weight: 700;
}
</style>
