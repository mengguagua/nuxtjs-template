<template>
  <div>
    <NuxtLink :to="'/newsDetail/'+8">
      新闻8
    </NuxtLink>
    <br>
    <NuxtLink :to="'/newsDetail/'+9">
      新闻9
    </NuxtLink>
    <br>
    <NuxtLink :to="'/newsDetail/'+10">
      新闻10
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
