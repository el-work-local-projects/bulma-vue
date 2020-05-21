<template>
	<div id="footer">
		<nav class="navbar is-fixed-bottom is-light">
			<div class="navbar-menu">
				<div class="navbar-start">
					<div class="navbar-item">
						<p>Report problems to the EMS Support Center (<i class="mdi mdi-phone"></i> 555-555-5555)</p>
					</div>
				</div>
				<div class="navbar-end">
					<div class="navbar-item" v-once>
						<p>Copyright <i class="mdi mdi-copyright"></i> {{ now | date }} Southern Company <i class="mdi mdi-billiards-rack"></i></p>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'FrameFooter',
		data: () => {
			return {
				now: new Date()
			}
		},
		filters: {
			date: function(value) {
				return value.getYear() + 1900;
			}
		}
	}
</script>

<style scoped>
	nav {
		height: 30px;
		min-height: 30px;
		border-top: 1px solid lightgrey;
	}
	.navbar-brand {
		min-height: 30px;
	}
	p {
		font-size: 12px;
	}
</style>