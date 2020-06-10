<template>
	<div class="container is-fluid">
		<div class="columns">
			<div class="column">
				<p class="title is-5">Tags</p>
				<p class="subtitle is-6">Sizes</p>
				<div class="table-container">
					<table class="table is-bordered is-striped is-fullwidth">
						<thead>
						<tr>
							<th></th>
							<th v-for="type in types" :key="type">{{type}}</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="size in sizes" :key="size">
							<th>{{ size }}</th>
							<td v-for="type in types" :key="type">
								<span class="tag" :class="['is-' + type, 'is-' + size]">Text</span>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
				<p class="subtitle is-6">Variants</p>
				<div class="table-container">
					<table class="table is-bordered is-striped is-fullwidth">
						<thead>
						<tr>
							<th></th>
							<th v-for="type in types" :key="type">{{type}}</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="variant in variants" :key="variant">
							<th>{{ variant }}</th>
							<td v-for="type in types" :key="type">
								<span class="tag" :class="['is-' + type, 'is-' + variant]">Text</span>
							</td>
						</tr>
						<tr>
							<th>delete</th>
							<td v-for="type in types" :key="type">
								<a class="tag is-delete" :class="'is-' + type"></a>
							</td>
						</tr>
						<tr>
							<th>with delete</th>
							<td v-for="type in types" :key="type">
								<span class="tag" :class="'is-' + type">
									Text
									<button class="delete is-small"></button>
								</span>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<p class="subtitle is-6">Lists</p>
				<div class="tags">
					<span class="tag">One</span>
					<span class="tag">Two</span>
					<span class="tag">Three</span>
				</div>
			</div>
			<div class="column">
				<p class="subtitle is-6">Attachments</p>
				<div class="tags has-addons">
					<span class="tag">One</span>
					<span class="tag is-primary">Two</span>
					<a class="tag is-delete"></a>
				</div>
			</div>
			<div class="column">
				<p class="subtitle is-6">Combo</p>
				<div class="field is-grouped is-grouped-multiline">
					<div class="control" v-for="ind in 20" :key="ind">
						<div class="tags has-addons">
							<span class="tag is-primary">Tag {{ ind }}</span>
							<a class="tag is-delete"></a>
						</div>						
					</div>
				</div>				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "LabelsView",
		data() {
			return {
				types: ['black', 'dark', 'light', 'white', 'primary', 'link', 'success', 'danger', 'warning', 'info'],
				sizes: ['normal', 'small', 'medium', 'large'],
				variants: ['light', 'rounded']
			}
		}
	}
</script>