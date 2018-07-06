<template>
    <div class="songlists">
		<div class="songlist" v-if="getSongSheet.info" v-for="(item, index) in getSongSheet.info" :key="index" @click="playIndex(index)">
			<div class="warpper">
				<div class="listIndex">
					<span v-show="!showVolume || getCurrentIndex !== index" class="index">{{index + 1}}</span>
					<i v-show="showVolume && getCurrentIndex === index" class="iconIndex icon-volume-medium"></i>
				</div>
				<div class="songInfo">
					<div class="detail">
						<p class="name">{{item.name}}</p>
						<p class="singer">{{item.singer}}</p>
					</div>
					<div class="border-1px"></div>
				</div>
			</div>
			<i class="rightSetting icon-list-circle" @click.stop="showmenu(item.name)"></i>
		</div>
	</div>
</template>

<script>
import store from "@/store.js"
export default {
    computed: {
		getSongSheet () {
			return this.$store.getters.getMusicSheetList ? this.$store.getters.getMusicSheetList : ''
		},
		showVolume () {
			let sheetType = this.$store.getters.getMusiSheetType
			let thisSheetType = this.$store.getters.getMusicSheetList.type
			if (sheetType === thisSheetType) {
				return true
			} else {
				return false
			}
		},
		getCurrentIndex () {
			return this.$store.getters.getCurrentIndex
		}
	},
	mounted () {
	}
}
</script>
