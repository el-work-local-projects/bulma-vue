<template>
	<nav class="navbar is-info" role="navigation" aria-label="nain navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="#">
				<i class="mdi mdi-coffee"></i> EMS CAFE
			</a>
			<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navItems">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div id="navItems" class="navbar-menu">
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
							<i class="mdi mdi-tab-plus"></i>
						</p>
						<b-switch v-model="samewindow" type="is-warning" size="is-small"></b-switch>
						<p class="control">
							<i class="mdi mdi-tab-unselected"></i>
						</p>
					</div>
				</div>
			</div>
			<div class="navbar-end">
				<a class="navbar-item">
					<i class="mdi mdi-message has-badge-rounded has-badge-bottom" data-badge="5"></i>		
				</a>
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
				samewindow: false
			}
		}
	}
</script>

<style>
	.custom-control-input-warning .custom-control-input:checked ~ .custom-control-label::before {
		color: #fff;
		border-color: #007bff;
		background-color: orange;
	}
</style>

<style scoped>
	nav {
		height: 50px;
		min-height: 50px;
	}
	.navbar-brand {
		min-height: 50px;
	}
	[data-badge]::after {
		box-shadow: none;
	}
</style>