<template>
	<div class="container is-fluid">
		<div class="columns">
			<div class="column">
				<div class="field">
					<b-switch class="is-small" v-model="btnsDisabled">Disable buttons</b-switch>
				</div>
				<p class="subtitle is-6">Sizes</p>
				<div class="table-container">
					<table class="table is-bordered is-striped is-fullwidth">
						<thead>
						<tr>
							<th></th>
							<th v-for="type in buttonTypes" :key="type">{{type}}</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="size in buttonSizes" :key="size">
							<th>{{size}}</th>
							<td v-for="type in buttonTypes" :key="type">
								<button type="button" class="button" :class="['is-' + type, 'is-' + size]" :disabled="btnsDisabled">Button</button>
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
							<th v-for="type in buttonTypes" :key="type">{{type}}</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="variant in buttonVariants" :key="variant">
							<th>{{variant}}</th>
							<td v-for="type in buttonTypes" :key="type">
								<button type="button" class="button" :class="['is-' + type, 'is-' + variant]" :disabled="btnsDisabled">Button</button>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<p class="subtitle is-6">Block</p>
				<button class="button is-primary is-fullwidth">Button</button>
			</div>
			<div class="column">
				<p class="subtitle is-6">Group</p>
				<div class="field is-grouped">
					<p class="control">
						<button class="button is-primary">Button</button>									
					</p>
					<p class="control">
						<button class="button is-success">Button</button>									
					</p>
					<p class="control">			
						<button class="button is-danger">Button</button>								
					</p>				
				</div>
			</div>
			<div class="column">
				<p class="subtitle is-6">Attachments</p>
				<div class="field has-addons">
					<p class="control">
						<button class="button is-primary">Button</button>									
					</p>
					<p class="control">
						<button class="button is-success">Button</button>									
					</p>
					<p class="control">			
						<button class="button is-danger">Button</button>								
					</p>				
				</div>
			</div>
			<div class="column">
				<p class="subtitle is-6">Lists</p>
				<div class="buttons">
					<button v-for="ind in 10" :key="ind" class="button is-primary">B {{ ind }}</button>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<p class="subtitle is-6">Dropdown</p>
				<b-dropdown aria-role="list" :mobile-modal="false" position="is-top-right">
					<button class="button is-primary" slot="trigger" slot-scope="{ active }">
						<span>Button</span>
						<b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
					</button>
					
					<b-dropdown-item aria-role="listitem">Action 1</b-dropdown-item>
					<b-dropdown-item aria-role="listitem">Action 2</b-dropdown-item>
					<b-dropdown-item aria-role="listitem">Action 3</b-dropdown-item>
				</b-dropdown>
			</div>
			<div class="column">
				<p class="subtitle is-6">Radio</p>
				<b-field>
					<b-radio-button v-model="btnRadio" native-value="No" type="is-danger">
						<b-icon icon="close"></b-icon>
						<span>No</span>
					</b-radio-button>
					<b-radio-button v-model="btnRadio" native-value="Yes" type="is-success">
						<b-icon icon="check"></b-icon>
						<span>Yes</span>
					</b-radio-button>
					<b-radio-button v-model="btnRadio" native-value="Maybe" type="is-warning">
						<b-icon icon="help"></b-icon>
						<span>Maybe</span>
					</b-radio-button>
				</b-field>
			</div>
			<div class="column">
				<p class="subtitle is-6">Checkbox</p>
				<b-field>
					<b-checkbox-button v-for="option in options" :key="option.value" v-model="btnCbSelected" 
							:native-value="option.value">{{ option.text }}</b-checkbox-button>
				</b-field>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ButtonsView',
		data() {
			return {
				btnsDisabled: false,
				buttonTypes: ['primary', 'success', 'danger', 'warning', 'info', 'link', 'white', 'light', 'dark', 'black', 'text'],
				buttonSizes: ['small', 'normal', 'medium', 'large'],
				buttonVariants: ['light', 'outlined', 'inverted', 'rounded', 'loading', 'static'],
				btnToggle: false,
				btnRadio: '',
				btnCbSelected: [],
				options: [
					{text: 'Left', value: 'left'},
					{text: 'Middle', value: 'middle'},
					{text: 'Right', value: 'right'}
				]
			}
		}
	}
</script>