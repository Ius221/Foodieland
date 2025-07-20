<template>
  <div class="header">
    <div class="name">Foodieland<span>.</span></div>
    <div class="navigation">
      <ul>
        <li>
          <router-link class="nav-link" to="#">Home</router-link>
          <router-link class="nav-link" to="#">Recipes</router-link>
          <router-link class="nav-link" to="#">Blog</router-link>
          <router-link class="nav-link" to="#">Contact</router-link>
          <router-link class="nav-link" to="#">About us</router-link>
        </li>
      </ul>
    </div>
    <div class="logos">
      <router-link to="#"
        ><img class="icon-link" src="../assets/svg/fb.png" alt="fb"
      /></router-link>
      <router-link to="#"
        ><img class="icon-link" src="../assets/svg/twitter.png" alt="twitter"
      /></router-link>
      <router-link to="#"
        ><img class="icon-link" src="../assets/svg/insta.png" alt="insta"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {};
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
}
li {
  color: #000;
  display: flex;
  gap: 6rem;
}
.nav-link:link,
.nav-link:visited {
  text-decoration: none;
  color: #000;
  font-size: 1.6rem;
  padding: 4rem 0;
  transition: all 0.3s;
}

.nav-link:hover,
.nav-link:active {
  transform: translateY(-3px);
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
</style>
