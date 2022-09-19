<template>
  <div>
    <el-progress :percentage="100" status="success"></el-progress>
    {{ releaseTime }}
  </div>
</template>

<script>
export default {
  // validate：nuxtjs额外的配置项，动态路由变量校验，下面校验是否是数字
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  // seo设置meta内容
  head() {
    return {
      title: '文章' + this.id,
      meta: [
        {
          name: '文章' + this.id,
        }
      ]
    }
  },
  // asyncData：nuxtjs额外的配置项，在页面渲染前，调用接口，可以理解为vue的created
  // 需要 return $axios
  asyncData ({ $axios, params, error }) {
    return $axios.get(`/api/ceb-portal/news/queryNewsById?id=${params.id}`).then((resp) => {
      if (!resp.data) {
        return {
          params: params,
          data: {
            8: '这是文章8的内容',
            9: '这是文章9的内容yyy',
            10: '这是文章10的内容',
          },
        };
      }
      return resp.data
    });
  }
}
</script>

<style scoped>

</style>
