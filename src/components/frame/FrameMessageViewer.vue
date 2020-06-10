<template>
	<div class="modal-card">
		<div class="modal-card-head">
			<p class="modal-card-title">CAFE Messages</p>
		</div>
		<section class="modal-card-body">
			<div v-for="(msgs, app) in groupedMessages" :key="app">
				<h5>{{ app }}</h5>
				<hr/>
				<b-notification v-for="msg in msgs" :key="msg.message" :type="'is-' + msg.type" @close="deleteMessage(msg)">
					{{ msg.message }}
				</b-notification>
			</div>
		</section>
		<footer class="modal-card-foot">
			<button class="button is-fullwidth" @click="undoDismissals">Undo Dismissals</button>
		</footer>
	</div>
</template>

<script>
	function loadMessages() {
		return [
			{
				type: 'info',
				message: 'Test message 1',
				applications: [
					'EOS Viewer',
					'Shift Log'
				]
			},
			{
				type: 'success',
				message: 'Test message 2',
				applications: [
					'CAFE'
				]
			}
		];
	}

	export default {
		name: 'FrameMessageViewer',
		props: {
			open: Boolean
		},
		data() {
			return {	
				localOpen: this.open,
				messages: []
			}
		},
		created() {
			this.messages = loadMessages();
		},
		computed: {
			groupedMessages() {
				let grouped = {};
				for (let msg of this.messages) {
					for (let app of msg.applications) {
						if (!grouped[app]) {
							grouped[app] = [];
						}
						grouped[app].push(msg);
					}
				}
				return grouped;
			}
		},
		methods: {
			deleteMessage(msg) {
				this.messages.splice(this.messages.indexOf(msg), 1);
			},
			undoDismissals() {
				this.messages = [
					{
						type: 'info',
						message: 'Test message 1',
						applications: [
							'EOS Viewer',
							'Shift Log'
						]
					},
					{
						type: 'success',
						message: 'Test message 2',
						applications: [
							'CAFE'
						]
					}
				];
			}
		}
	}
</script>

<style scoped>
</style>