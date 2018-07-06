<template>
	<transition name="sliderUpHideRight">
		<div class="songsheet" ref="songsheet" v-show="showSongSheet" @scroll="scrollEvent">
			<div class="songheader">
				<i class="back icon-back" @click.stop="hideSongSheet"></i>
				<p class="title">歌单</p>
				<i class="search icon-search"></i>
				<i class="menu icon-list-circle"></i>
				<div class="songheaderimg" ref="songheader"></div>
			</div>
			<div class="content">
				<div class="top" ref="top">
					<div class="songsheetdisc">
						<div class="songsheetimg">
							<img v-if="getSongSheet.info" :src="getSongSheet.info[0].img_url" alt="">
							<span class="info" @click.stop="showDownloadImg">i</span>
						</div>
						<div class="disc">
							<p v-if="getSongSheet" class="songsheetname">{{getSongSheet.name}}</p>
							<div class="user">
								<img  v-if="getSongSheet.user" class="avatar" :src="getSongSheet.user.avatar" alt="">
								<p v-if="getSongSheet.user" class="songsheetuser">{{getSongSheet.user.name}}</p>
								<i class="icon-right"></i>
							</div>
						</div>
					</div>
					<div class="do">
						<div class="list nocollect">
							<i class="icon-music"></i>
							<span class="disc">收藏</span>
						</div>
						<div class="list">
							<i class="icon-music"></i>
							<span class="disc">评论</span>
						</div>
						<div class="list">
							<i class="icon-music"></i>
							<span class="disc">分享</span>
						</div>
						<div class="list">
							<i class="icon-music"></i>
							<span class="disc">下载</span>
						</div>
					</div>
				</div>
				<div class="bottom">
					<div class="bottom-wrapper">
						<div class="info" >
							<i class="icon-music"></i>
							<span class="name">播放全部</span>
							<span class="count">(共{{getSongSheet.count}}首)</span>
						</div>
						<div class="rightSetting">
							<i class="icon-menu"></i>
							<span>多选</span>
						</div>
					</div>
					<div class="border-1px"></div>
					<songlist></songlist>
				</div>
			</div>
			<downloadimage @hidedownloadimage="hideDownloadImg" :show-image="showDownloadImage" :sheet-data="sheetData"></downloadimage>
			<!-- 底部固定页 -->
    		<bottom-bar></bottom-bar>
		</div>
	</transition>
</template>

<script>
import store from '@/store.js'
import bottombar from "@/components/bottombar/bottombar.vue"
import songlist from "@/components/songlist/songlist.vue"
export default {
    data(){
		return {
			isShow: false,
			showDownloadImage: false,
			sheetData: {}
		}
    },
    components:{
		"bottom-bar":bottombar,
		"songlist":songlist,
    },
    methods: {
		hideSongSheet () {
			store.commit({
				type: 'setIsShowSongSheet',
				isShow: false
			})
		},
		scrollEvent () {
			// alert(this.$refs.songsheet.scrollTop)
			let opacity = this.$refs.songsheet.scrollTop / (this.$refs.top.offsetHeight - this.$refs.songheader.offsetHeight)
			if (this.$refs.songsheet.scrollTop < this.$refs.top.offsetHeight - this.$refs.songheader.offsetHeight) {
				this.$refs.songheader.style.opacity = opacity
				this.$refs.songheader.style.filter = `alpha(opacity:${opacity * 100})`
			} else {
				this.$refs.songheader.style.opacity = 1
				this.$refs.songheader.style.filter = `alpha(opacity:${100})`
			}
		},
		playAll (index) {
			// index 是从第几个开始播放
			store.commit({
				type: 'setMusiSheetType',
				sheettype: this.$store.getters.getMusicSheetList.type
			})
			store.commit({
				type: 'setMusicList',
				list: this.$store.getters.getMusicSheetList.info
			})
			store.commit({
				type: 'playIndex',
				index: index
			})
		},
		showDownloadImg () {
			this.showDownloadImage = true
			this.$refs.songsheet.style.overflow = 'hidden'
		},
		hideDownloadImg () {
			this.showDownloadImage = false
			this.$refs.songsheet.style.overflow = 'auto'
		}
	},
	watch: {
		isShow: function (newisshwo, oldisshow) {
			this.$refs.songsheet.scrollTop = 0
			let img = this.$store.getters.getMusicSheetList ? this.$store.getters.getMusicSheetList : ''
			if (newisshwo) {
				this.$refs.top.style.backgroundImage = `url(${img.info[0].img_url})`
				this.$refs.top.style.backgroundSize = `5800%`
				this.$refs.top.style.backgroundPosition = `center center`
				this.$refs.songheader.style.backgroundImage = `url(${img.info[0].img_url})`
				this.$refs.songheader.style.backgroundSize = `5800%`
				this.$refs.songheader.style.backgroundPosition = `center center`
			}
		}
	},
	computed: {
		showSongSheet () {
			// let img = this.$store.getters.getMusicSheetList ? this.$store.getters.getMusicSheetList : ''
			// if (this.$store.getters.getIsShowSongSheet) {
			// 	alert(this.$refs.top)
			// 	this.$refs.top.style.backgroundImage = 'url(' + img.info[0].img_url + ')'
			// 	this.$refs.top.style.backgroundSize = '1800%'
			// 	this.$refs.top.style.backgroundPosition = 'center center'
			// }
			this.isShow = this.$store.getters.getIsShowSongSheet ? this.$store.getters.getIsShowSongSheet : false
			return this.isShow
		},
		getSongSheet () {
			this.sheetData = this.$store.getters.getMusicSheetList
			return this.$store.getters.getMusicSheetList ? this.$store.getters.getMusicSheetList : ''
		},
		getImageColor () {
			return this.$store.getters.getSongSheetImageColor ? this.$store.getters.getSongSheetImageColor : '#333'
		}
	},
	
	mounted () {
	}
}
</script>
