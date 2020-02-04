<template>
	<div id="loading" v-if=show>
		<h1>{{tips}}</h1>
	</div>
</template>

<script>
	export default {
		name: 'fullScreenLoading',
		data () {
			return {
				show: false,
				tips: '加载中...'
			}
		}
	}
</script>

<style lang='less'>
	#loading{
		width: 100%;
		height: 100%;
		display: flex;
		background-color: rgba(0,0,0,.4);
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		h1{
			font-size: 24px;
			color: skyblue;
		}
	}
</style>
