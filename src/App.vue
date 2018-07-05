<template>
  <div id="app">
    <header-nav></header-nav>
    <mymusic-nav></mymusic-nav>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import header from "@/components/header/header.vue"
import mymusic from "@/views/mymusic.vue"
import bottombar from "@/components/bottombar/bottombar.vue"
import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import store from '@/store.js'

Vue.use(Vueaxios, axios)
export default {
  data () {
    return {
      info: {}
    }
  },
  components:{
    "header-nav":header,
    "mymusic-nav":mymusic,
    "bottom-bar":bottombar,
  },
  created () {
    let LocalAPI = 'https://www.easy-mock.com/mock/5b3c5dcda27b9a779117e8bb/vue-music-liao/music'
    axios.get(LocalAPI).then((res) => {
      // data.user的信息赋值给info  再通过组件的数据传递传给sideBar
      console.log(res);
      this.info = res.data.user
      // 把所有的音乐数据给vuex的musicAllList
      store.dispatch('set_MusicAllList', res.data.music)
      // 所有的数据存起来  包括音乐个人信息 等等
      store.dispatch('set_AllInfo', res.data)
      // 设置音乐的地址  初始化 根据vuex的currentIndex来决定
      this.$refs.audio.setAttribute('src', store.getters.getCurrentMusic.url)
      // 给audio元素存在vuex 的state里面  方便日后调用
      store.dispatch('set_AudioElement', this.$refs.audio)
    }, (err) => {
      alert(err)
    })
  }
}
</script>


<style src="@/assets/style/base.scss" lang="scss"/>
<style src="../static/font-icon/style.css" lang="css" />
<style>
body,html{
  margin:0;
  padding:0;
  box-sizing:border-box;
  background:#f0f0f0f0;
  user-select:none;
  -webkit-tap-highlight-color: transparent;
}

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>


