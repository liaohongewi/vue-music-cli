<template>
	<div class="typelist" @click="alert1" :style="{background:typelistbg}">	
		<i class="info" :class="iconInfo"></i>
		<div class="typelist-detail">
			<span class="name">{{listName}}</span>
			<span class="count" v-show="showCount">({{listCount}})</span>
			<p v-if="showBorder" class="border-1px"></p>
			<i v-if="isPlaying" class="isPlaying icon-volume-medium"></i>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			name: {
				type: String,
				default: '未曾遗忘的青春'
			},
			count: {
				type: String,
				default: '1'
			},
			hasBorder: {
				type: Boolean,
				default: true
			},
			playing: {
				type: Boolean,
				default: false
			},
			iconinfo: {
				type: String
			},
			bgcolor: {
				type: String,
				default: '#f7f7f7'
			}
		},
		data () {
			return {
				listName: '',
				listCount: '0',
				showBorder: true,
				isPlaying: false,
				iconInfo: '',
				typelistbg: ''
			}
		},
		methods: {
			alert1 () {
				window.open('https://github.com/IFmiss/vue-cloud-music')
			}
		},
		computed: {
			showCount () {
				return this.count !== 'none'
			}
		},
		created () {
			this.listName = this.name
			this.listCount = this.count
			this.showBorder = this.hasBorder
			this.isPlaying = this.playing
			this.iconInfo = this.iconinfo
			this.typelistbg = this.bgcolor
		}
	}
</script>
