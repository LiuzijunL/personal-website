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

		<back-top></back-top>
        <!-- <vue-live2d style="position: fixed; right: 40px;bottom: 10px" :size="200" direction="right"></vue-live2d> -->
    </div>
</template>

<script>
// import vueLive2d from 'vue-live2d'
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import BackTop from '@/components/BackTop'
export default {
    components: {
		HeaderBar,
		FooterBar,
		BackTop,
		// vueLive2d
	}
}
</script>

<style lang="less">
.theme-container{
    box-sizing: border-box;
}
.theme-item{
	max-width: 860px;
    margin: 0px auto;
    padding: 2rem 2.5rem;
}
</style>