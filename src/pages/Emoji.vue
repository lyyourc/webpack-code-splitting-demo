<template>
<div class="emoji">
  <div v-html="emoji"></div>
  <button @click="fetchEmoji"> Lucky! </button>
</div>
</template>

<script>
import axios from 'axios'
import MagicBtn from '../components/MagicBtn.vue'

export default {
  name: 'app',
  components: { MagicBtn },

  data () {
    return {
      emoji: '',
    }
  },

  created() {
    this.fetchEmoji()
  },
  
  methods: {
    fetchEmoji() {
      try {
        axios.get('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
          .then(res => res.data.emoji)
          .then(emoji => this.emoji = emoji)

      } catch (err) {
        console.error(err)
      }
    }
  },
}
</script>

<style scoped>
.emoji {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 100px;
}
</style>
