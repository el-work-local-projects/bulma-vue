<template>
	<nav class="navbar is-primary" role="navigation" aria-label="nain navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="#">
				<i class="mdi mdi-coffee"></i> EMS CAFE
			</a>
			<a role="button" class="navbar-burger burger" :class="{'is-active': navOpen}" @click="navOpen = !navOpen" 
							aria-label="menu" aria-expanded="false" data-target="navItems">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div id="navItems" class="navbar-menu" :class="{'is-active': navOpen}">
			<div class="navbar-start">
				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">Applications</a>
					<div class="navbar-dropdown">
						<a class="navbar-item" href="#" v-for="(app, index) in apps" :key="`app-${index}`">{{ app }}</a>
					</div>
				</div>
				<div class="navbar-item">
					<div class="field is-grouped">
						<p class="control">
							<b-tooltip label="New Tab" type="is-dark" position="is-bottom">
								<i class="mdi mdi-tab-plus"></i>
							</b-tooltip>
						</p>
						<b-switch v-model="samewindow" type="is-warning" size="is-small"></b-switch>
						<p class="control">
							<b-tooltip label="Same Tab" type="is-dark" position="is-bottom">
								<i class="mdi mdi-tab-unselected"></i>
							</b-tooltip>
						</p>
					</div>
				</div>
			</div>
			<div class="navbar-end">
				<b-tooltip label="Messages" type="is-dark" position="is-bottom">
					<!-- I had to rewrap this to get the right styles applied to the link again after setting the tooltip -->
					<div class="navbar is-primary">
						<div class="navbar-end">
						<a class="navbar-item" type="button" @click="openMessageModal()">
							<i class="mdi mdi-message has-badge-rounded has-badge-bottom" data-badge="5"></i>			
						</a>
						</div>
					</div>
				</b-tooltip>
				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						<i class="mdi mdi-help-circle"></i>
					</a>
					<div class="navbar-dropdown is-right">
						<a class="navbar-item" href="#">CAFE User Guide</a>
						<a class="navbar-item" href="#">Application User Guide</a>
						<a class="navbar-item" href="#">CAFE Administration Guide</a>
						<a class="navbar-item" href="#">Application Administration Guide</a>
					</div>
				</div>
				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						<i class="mdi mdi-account"></i> {{ user.name }}							
					</a>
					<div class="navbar-dropdown is-right">
						<a class="navbar-item">Log out</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	import FrameMessageViewer from './FrameMessageViewer.vue'
	
	export default {
		name: 'NavBar',
		data: () => {
			return {
				user: {
					name: 'dummy'
				},
				apps: [
					'ACE Viewer',
					'PCC Operating Report',
					'OASIS Administrator',
					'Shift Log'
				],
				samewindow: false,
				navOpen: false,
				showMessageModal: false
			}
		},
		methods: {
			openMessageModal() {
				this.$buefy.modal.open({
					parent: this,
					component: FrameMessageViewer,
					hasModalCard: true,
					trapFocus: true
				});
			}
		}
	}
</script>

<style scoped>
	.navbar {
		height: 50px;
		min-height: 50px;
	}
	.navbar-brand {
		min-height: 50px;
	}
	[data-badge]::after {
		box-shadow: none;
		z-index: 1;
	}
</style>