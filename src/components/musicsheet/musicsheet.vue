<template>
	<div class="musicsheet">
		<div class="title" @click="toggleSheets($event)">
			<i class="toggle icon-down" ref="toggleicon"></i>
			<div class="detail">
				<span class="name">{{data_item.name}}</span>
				<span class="count">({{data_item.count}})</span>
				<i class="setting icon-setting" @click.stop="showSheetMenu(data_item.name)"></i>
			</div>
		</div>
		<div v-show="showSheets" v-for="(list, listindex) in data_item.detail" :key="list" @click.stop="showSongSheet(list)">
			<div class="content">
				<img class="sheetimg" :src="list.info[0].img_url" alt="">
				<div class="detail">
					<p class="name">{{list.name}}</p>
					<p class="count">{{list.count}}首歌曲</p>
					<i class="setting icon-list-circle" @click.stop="showMenu(list.name)"></i>
					<p v-show="data_item.detail.length != listindex + 1" class="border-1px"></p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import store from '@/store.js'
	export default {
		props: {
			item: {
				type: Object
			},
			num: {
				type: Number
			}
		},
		data () {
			return {
				showSheets: true,
				data_item: {},
				data_num: {}
			}
		},
		computed: {
			getSheets () {
				return this.$store.getters.getMusicAllList.sheets
			}
		},
		methods: {
			toggleSheets (event) {
				this.$refs.toggleicon.style.transform = this.showSheets ? 'rotate(-90deg) translate3d(50%, 0, 0)' : 'rotate(0) translate3d(0, -50%, 0)'
				this.showSheets = !this.showSheets
			},
			showMenu (name) {
				store.dispatch({
					type: 'showMenuList',
					amount: {
						title: `歌单:${name}`,
						content: [
							{
								name: '分享',
								iconinfo: 'icon-share',
								count: 'none',
								bgcolor: '#fff'
							},
							{
								name: '编辑',
								iconinfo: 'icon-edit',
								count: 'none',
								bgcolor: '#fff'
							},
							{
								name: '删除',
								iconinfo: 'icon-delete',
								count: 'none',
								bgcolor: '#fff'
							}
						]
					}
				})
			},
			showSheetMenu (name) {
				store.dispatch({
					type: 'showMenuList',
					amount: {
						title: `${name}`,
						content: [
							{
								name: '删除',
								iconinfo: 'icon-delete',
								count: 'none',
								bgcolor: '#fff'
							}
						]
					}
				})
			},
			showSongSheet (data) {
				store.dispatch({
					type: 'set_MusicSheetList',
					data: data
				})
				store.commit({
					type: 'setIsShowSongSheet',
					isShow: true
				})
			}
		},
		mounted () {
			this.data_item = this.item
			this.data_num = this.num
		}
	}
</script>


