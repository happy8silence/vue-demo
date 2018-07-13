<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view/>
    <router-view name="footer"></router-view>
    
  </div>
</template>

<script>
    import Header from '@/components/header.vue';
    import Footer from '@/components/footer.vue';

export default {
  name: 'App'
}
</script>

<style lang="scss">
    #app {
        height: inherit;
    }
</style>

