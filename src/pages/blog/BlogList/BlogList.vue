<template>
  <the-container>
    <div class="text-content">
      <heading-primary class="head"> Blog & Article </heading-primary>
      <the-para class="para"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
        error.</the-para
      >
      <div class="search-box">
        <input
          type="email"
          name="mail"
          placeholder="Search article, news or recipe..."
        />
        <button type="submit">Search</button>
      </div>
    </div>
    <div class="list-items">
      <the-blogs class="blogs" />
    </div>
  </the-container>
</template>

<script>
import TheBlogs from "./TheBlogs.vue";
export default {
  components: {
    TheBlogs,
  },
};
</script>

<style scoped>
.text-content {
  margin: 8rem 0;
}
.head {
  margin-bottom: 2.4rem;
}
.search-box {
  height: 8rem;
  width: 70rem;
  /* background-color: red; */
  margin: 0 auto;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  border-radius: 2.4rem;
}
input {
  border-radius: 2.4rem;
  border: none;
  padding: 3rem;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.4rem;
  width: 100%;
  height: 100%;
}
.para {
  margin-bottom: 8rem;
  text-align: center;
}
button {
  background-color: #000;
  height: 6rem;
  width: 16rem;
  border: none;
  transition: all 0.3s;
  font-size: 1.4rem;
  cursor: pointer;
  border-radius: 16px;
  margin-right: 10px;
  font-weight: 600;
  color: #fff;
}
button:hover {
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: #e7f9fd;
}
.list-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
}
.blogs {
  grid-column: 1/3;
}
</style>
