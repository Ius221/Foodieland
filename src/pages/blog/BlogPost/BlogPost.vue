<template>
  <h2>Hii there</h2>
</template>

<script>
export default {
  created() {
    const id = this.$route.params.blogId;
    const allBlog = this.$store.state.blog.blogs;
    const currBlog = allBlog.find((abc) => abc.id == id);
    console.log(id, currBlog);
  },
};
</script>

<style scoped></style>
