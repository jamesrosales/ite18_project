<!-- eslint-disable vue/multi-word-component-names --> // eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="parentDiv">
    <div class="nav">
      <div class="bg-gray-800 py-4 px-4">
        <NuxtLink class="text-white p-2 hover:bg-gray-700" to="/">Home</NuxtLink>
        <NuxtLink v-if="!isAuthenticated" class="text-white p-2 hover:bg-gray-700" to="/user/register">Sign Up</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['isAuthenticated']),
    },
    methods: {
      async userLogout() {
        await this.$auth.logout()
      },
    },
  }
</script>
<style>
  body {
    margin: 0;
    padding: 0;
  }

  .parentDiv {
    position: absolute;
    width: 100%;
    background-color: black;
    color: white;
  }

  .nav {
    text-align: center;
  }

  ul li {
    display: inline-block;
    padding: 0 5px;
  }
</style>