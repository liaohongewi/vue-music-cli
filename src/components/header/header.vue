<template>
    <div class="header">
		<div class="header-warpper">
			<i class="menu icon-menu"></i>
			<div class="centermenu">
				<router-link tag="i" to="/">
					<i class="music icon-music" :class= "selectIndex===0?'active':''" ></i>
				</router-link>
				<router-link tag="i" to="/">
					<i class="find icon-wangyi"></i>
				</router-link>
				<router-link tag="i" to="/">
					<i class="community icon-community"></i>
				</router-link>
			</div>
			<!-- <router-link tag="i" to="/search"> -->
				<i class="search icon-search"></i>
			<!-- </router-link> -->
			<router-view></router-view>
			<!-- <Counter class="counter"></Counter> -->
		</div>
	</div>
</template>
