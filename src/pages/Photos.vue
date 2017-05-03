<template>
<div :style="{ height: `${layoutGeometry.containerHeight}px` }">
  <section v-for="(box, i) in layoutGeometry.boxes"
    :style="{
      width: `${box.width}px`,
      height: `${box.height}px`,
      top: `${box.top}px`,
      left: `${box.left}px` }">
    <img :src="imgs[i].url">
  </section>
</div>
</template>

<script>
import axios from 'axios'
import justifiedLayout from 'justified-layout'
import MagicBtn from '../components/MagicBtn.vue'

export default {
  components: { MagicBtn },
  data () {
    return {
      imgs: [],
      layoutGeometry: {
        boxes: [],
      },
    }
  },
  created() {
    this.fetchImages()
  },
  
  methods: {
    fetchImages() {
      try {
        axios.get('https://www.reddit.com/r/funny.json')
          .then(res => res.data.data.children)
          .then(posts => posts.map(p => p.data.preview.images[0].source))
          .then(imgs => Promise.all(imgs.map(i => this.verifyImg(i))))
          .then(imgs => imgs.filter(i => i.invalid !== true))
          .then(imgs => {
            this.imgs = imgs
            const sizes = imgs.map(img => img.width / img.height)
            this.layoutGeometry = justifiedLayout(sizes)
          })
      } catch (err) {
        console.error(err)
      }
    },
    verifyImg(image) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = image.url
        img.onload = () => resolve(image)
        img.onerror = () =>
          resolve(Object.assign({}, image, { invalid: true })) 
      })
    },
  },
}
</script>

<style styled>
div {
  position: relative;
  width: 1060px;
  margin: 0 auto;
}

section {
  position: absolute;
}

img {
  height: 100%;
  width: 100%;
}
</style>
