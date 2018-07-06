<template>
    <div class="bottom-bar" >
		<div class="music-info">
			<img class="music-pic" :src="musicImage" alt="">
			<div class="music-detail">
				<p class="music-name" v-if="musicName">{{musicName}}</p>
				<p class="music-singer" v-if="musicSinger">{{musicSinger}}</p>
			</div>
		</div>
		<div class="playpause">
			<i :class="iconPlayPause?'icon-pause':'icon-play'"></i>
		</div>
		<i class="music-list icon-list-music"></i>
	</div>
</template>
<script>
import store from '@/store.js'
export default {
    data(){
        return{
            audioInfo:{},
            myaudio:{},
            state:{
                isplaying:false,
                loading:false,
                currentIndex:0
            }
        }
	},
	computed: {
			iconPlayPause () {
				return this.audioInfo.playing
			},
			// 获取音乐名称
			musicName () {
				return this.$store.getters.getCurrentMusic ? this.$store.getters.getCurrentMusic.name : ''
			},
			// 获取歌手名称
			musicSinger () {
				return this.$store.getters.getCurrentMusic ? this.$store.getters.getCurrentMusic.singer : ''
			},
			// 获取音乐封面地址
			musicImage () {
				return this.$store.getters.getCurrentMusic ? this.$store.getters.getCurrentMusic.img_url : ''
			},
			// 获取音乐播放地址
			musicUrl () {
				return this.$store.getters.getCurrentMusic ? this.$store.getters.getCurrentMusic.url : ''
			}
	},
    mounted () {
        // 所有的audio的 vuex 的状态信息
		this.audioInfo = this.$store.state.audioInfo
		// 音乐是否play
		this.state.isplaying = this.audioInfo.playing
	}
}
</script>