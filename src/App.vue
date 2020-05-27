<template>
  <div id="app">
    <NavBar></NavBar>
	<div id="app-content" class="is-marginless">
		<div class="columns">
			<div class="column">
				<p>Content</p>
			</div>
		</div>
	</div>
	<FrameFooter></FrameFooter>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FrameFooter from './components/FrameFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
	FrameFooter
  }
}
</script>

<style lang="scss">
	@import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
	@import "@/styles/global.scss";
	@import "../node_modules/bulma-badge/dist/css/bulma-badge.min.css";
	
	html {
		height: 100%;
		overflow-y: auto !important;
	}
	
	body {
		height: 100%;
	}
	
	#app {
		height: 100%;
	}
	
	
	#app-content {
		height: calc(100% - 80px);
		padding-left: 15px;
		padding-right: 15px;
	}
</style>
