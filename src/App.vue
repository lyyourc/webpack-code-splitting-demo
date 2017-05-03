<template>
<div id="app">
  <emoji></emoji>
</div>
</template>

<script>
import Emoji from './pages/Emoji.vue'

export default {
  name: 'app',
  components: { Emoji },
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
</style>

<style scoped>
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
