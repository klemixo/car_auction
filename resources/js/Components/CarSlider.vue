<template>
    <div>
        <vueper-slides
  ref="vueperslides1"
  :touchable="true"
  fade
  :autoplay="false"
  :bullets="false"
  :arrows="mobileView"
  @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
  fixed-height="400px">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    image="http://54.36.172.231/img/base-img.png">
  </vueper-slide>
</vueper-slides>

<vueper-slides
v-if="!mobileView"
  class="no-shadow thumbnails"
  ref="vueperslides2"
  @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
  :visible-slides="slides.length"
  fixed-height="75px"
  :bullets="false"
  :touchable="false"
  :gap="2.5"
  :arrows="false">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    image="http://54.36.172.231/img/base-img.png"
    @click.native="$refs.vueperslides2.goToSlide(i)">
  </vueper-slide>
</vueper-slides>
  <img v-for="img in slides" :src="img" alt="">
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
    export default {
        components: { VueperSlides, VueperSlide },
        props:['slides'],
        computed:{
          mobileView(){
            return window.innerWidth < 768 ? true :false;
          }
        }
    }
</script>

<style lang="scss" scoped>
.thumbnails {
  margin: auto;
  max-width: 100%;
  margin-top:12px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
  width:158px !important;
  height:108px !important;
}
.vueperslides__arrow {
  &--prev{
    left:-3rem !important;
  }
  &--next{
    right:-3rem !important;
  }
}
.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}
</style>