<template>
  <div id="app">
    <NavBar></NavBar>
	<div id="app-content" class="container is-fluid pt-1 pb-1">
		<div id="selector" class="field is-horizontal mb-0">
			<div class="field-label is-normal" style="flex-grow: 0;">
				<label class="label">Feature: </label>						
			</div>
			<div class="field-body">
				<b-select placeholder="Feature" v-model="mode">
					<option v-for="option in modeOptions" :key="option" :value="option">
						{{ option }}
					</option>
				</b-select>
			</div>
		</div>
		<div id="selection" class="container-wrapper">
			<router-view></router-view>		
		</div>
	</div>
	<FrameFooter></FrameFooter>
  </div>
</template>

<script>
import NavBar from './components/frame/NavBar.vue'
import FrameFooter from './components/frame/FrameFooter.vue'

export default {
  name: 'App',
  data() {
	return {
		mode: 'text',
		modeOptions: [
			'text',
			'labels',
			'buttons',
			'tables',
			'component-tables',
			'forms',
			'component-forms',
			'navigation',
			'alerts',
			'time-selection',
			'progress',
			'list-groups',
			'dialogs',
			'containers'
		]
	}
  },
  created: function() {
	this.mode = this.$route.path.substring(1);
	
	this.$watch('mode', () => {
		this.$router.push(this.mode);
	});
  },
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
	}
	
	#selector {
		height: 44px;
		border-bottom: 1px solid lightgrey;
	}
	
	#selection {
		height: calc(100% - 40px);
	}
	
	.container-wrapper {
		margin-left: -15px;
		margin-right: -15px;
		overflow: auto;
	}
</style>
