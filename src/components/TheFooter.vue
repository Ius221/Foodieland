<template>
  <the-container>
    <div class="footer">
      <div class="top">
        <router-link class="title" to="/">Foodieland<span>.</span></router-link>
        <ul>
          <li>
            <router-link class="nav-link" to="/recipes">Recipes</router-link>
          </li>
          <li><router-link class="nav-link" to="/blog">Blog</router-link></li>
          <li>
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/about">About us</router-link>
          </li>
        </ul>
        <p class="last">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div class="bottom">
        <div class="empty">&nbsp;</div>
        <p class="text">
          &copy; 2025 Foodieland. Powered by <span>NovexiQ</span>
        </p>
        <div class="logos">
          <router-link to="#"
            ><img class="icon-link" src="../assets/svg/fb.png" alt="fb"
          /></router-link>
          <router-link to="#"
            ><img
              class="icon-link"
              src="../assets/svg/twitter.png"
              alt="twitter"
          /></router-link>
          <router-link to="#"
            ><img class="icon-link" src="../assets/svg/insta.png" alt="insta"
          /></router-link>
        </div>
      </div>
    </div>
  </the-container>
</template>

<script>
export default {};
</script>

<style scoped>
/*************/
/* TOP PART */
/***********/
.top {
  margin-bottom: 4.8rem;
}
.title:link,
.title:active {
  color: #000;
  text-decoration: none;
  font-family: "Lobster", sans-serif;
  font-size: 2.4rem;
}
.title:hover,
.title:visited {
  color: #000;
}
.title span {
  color: #f00;
}
/* NAVIGATE LINK */
ul {
  list-style-type: none;
  color: #000;
  display: flex;
  justify-content: end;
  flex-direction: row;
  gap: 6rem;
}
.nav-link:link,
.nav-link:visited {
  text-decoration: none;
  color: #000;
  font-size: 1.6rem;
}
.last {
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.6);
}

/****************/
/* BOTTOM PART */
/**************/
.text {
  color: #666;
  font-size: 1.8rem;
}
.text span {
  color: #ff7967;
}

.bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LAST LOGOS */
.icon-link {
  height: 2.2rem;
  width: 2.2rem;
}
.logos {
  display: flex;
  gap: 4rem;
}
</style>
