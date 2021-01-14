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

<style>
body{
	margin: 0;
	background-color: #fefefe;
}
#app {
	font-family: Ubuntu,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
