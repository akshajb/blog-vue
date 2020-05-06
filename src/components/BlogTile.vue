<template>      
<div>
    <div class="title">
        <h2>{{blog.title}}</h2>
    </div>
    <div class="body">
        <div class="image">
            <!-- <img v-bind:src="image.urls.regular" alt=""> -->
        </div>
        <p>{{blog.desc}}</p>
    </div>
</div>
</template>
<script>
export default {
    name: 'BlogTile',
    props: {
        blog: {
            Type: Object
        }
    }
}
</script>
<style scoped>
.title {
  text-transform: capitalize;
  margin-bottom: 16px;
}
.image img {
  width:250px;
  height:250px;
  object-fit:scale-down;
}
</style>