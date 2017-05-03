<template>
<nav>
  <ul>
    <li v-for="nav in navs">
      <router-link :to="nav.path" exact>
        {{ nav.name }}
      </router-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { name: 'Home', path: '/' },
        { name: 'Photos', path: '/photos' },
      ],
    }
  },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;

  color: #000;
  font-size: 2rem;
  margin-top: 20px;
}

ul {
  list-style: none;
  display: flex;
  margin: 0;
}

li {
  margin: 0 1rem;
}

a {
  color: #abcedf;
  text-decoration: none;
}
a.router-link-active {
  text-decoration: underline;
}
</style>
