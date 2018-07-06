<template>
    <div class="mymusic">
		<type-list name="我的音乐" iconinfo="icon-music" count="28" :playing="true"></type-list>
		<type-list name="最近播放" iconinfo="icon-zuijinplay" count="18"></type-list>
		<type-list name="我的电台" iconinfo="icon-diantai" count="1"></type-list>
		<type-list name="我的收藏" iconinfo="icon-collect" count="3" :has-border="false"></type-list>
		<musicsheet v-for="(item, num) in items" :item="item" :num="num" :key="item.id"></musicsheet>
    	<!-- 底部显示的菜单列表 -->
   		<menu-list></menu-list>
	</div>
</template>

<script>
import typelist from "@/components/typelist/typelist.vue"
import musicsheet from "@/components/musicsheet/musicsheet.vue"
export default {
	computed: {
		items () {
			return this.$store.getters.getMusicAllList.sheets
		}
		
	},
    components:{
        "type-list":typelist,
        musicsheet,
    }
}
</script>

