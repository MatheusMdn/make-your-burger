<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/pedidos">Pedidos</router-link>
  </div>
</template>

<script>
  export default {
      name:'NavBar',
      props:["logo","alt"]
  }

</script>

<style scoped>
  #nav {
    background:#222;
    border-bottom:4px solid #111;
    padding:15px 50px;
    display:flex;
    justify-content: flex-end;
    align-items:center;
  }
  #logo-url{
    margin-right:auto;
  }

  #logo {
    width:40px;
    height:40px;
  }

  #nav a {
    text-decoration:none;
    color:#fcba03;
    transition:0.5s;
  }

  #nav a:last-child{
    margin-left:12px;
  }


  #nav a:hover{
    color:#fff;
  }

</style>