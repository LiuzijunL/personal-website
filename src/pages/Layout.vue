<template>
    <div class="theme-container">
        <header-bar></header-bar>

		<main class="lz-main-content">
			<transition>
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
		</main>
		
		<footer-bar></footer-bar>
        <!-- <vue-live2d style="position: fixed; right: 45px;bottom: 10px" :size="200" direction="right"></vue-live2d> -->
    </div>
</template>

<script>
// import vueLive2d from 'vue-live2d'
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
export default {
    components: {
		HeaderBar,
		FooterBar,
		// vueLive2d
	}
}
</script>

<style lang="less">
.theme-container{
    box-sizing: border-box;
}
</style>