<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style lang="less">
@default-color: #242424;
@default-a-color: #67cc86;
body{
	margin: 0;
	background-color: #fefefe;
}
#app {
	font-family: Ubuntu,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: @default-color;
}
hr{
	width: 100%;
	border: 0;
	border-top: 1px solid #eaecef;
}
h1,h2,h3,h4,h5,h6{
	font-weight: 500;
	line-height: 1.25;
}
h3{
	font-size: 1.2rem;
}
a{
	text-decoration: none;
	font-weight: 500;
	color: @default-a-color;
}
ol, ul{
	padding-left: 1.2rem;
}
</style>
