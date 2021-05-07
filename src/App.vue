<template>
  <div id="app">
    <Header />
    <Banner />
    <Produtos />
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Produtos from './components/Produtos.vue'
import Newsletter from './components/Newsletter.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Produtos,
    Newsletter,
    Footer
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0px 20px;
  overflow-x: hidden;
}

</style>
