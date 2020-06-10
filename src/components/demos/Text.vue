<template>
	<div class="container is-fluid">
		<div class="columns">
			<div class="column">
				<h1 class="title">Titles</h1>
				<h1 class="subtitle">Subtitles</h1>
				<h1 class="title is-1">Heading 1</h1>
				<h1 class="subtitle is-1">Heading 1</h1>
				<h2 class="title is-2">Heading 2</h2>
				<h2 class="subtitle is-2">Heading 2</h2>
			</div>
			<div class="column">
				<h3 class="title is-3">Heading 3</h3>
				<h3 class="subtitle is-3">Heading 3</h3>
				<h4 class="title is-4">Heading 4</h4>
				<h4 class="subtitle is-4">Heading 4</h4>
				<h5 class="title is-5">Heading 5</h5>
				<h5 class="subtitle is-5">Heading 5</h5>
				<h6 class="title is-6">Heading 6</h6>
				<h6 class="subtitle is-6">Heading 6</h6>				
			</div>
			<div class="column">
				<h2 class="title">Body text</h2>
				<p>Text goes here. A link looks like <a href="#">this</a>.</p>
				<p><small>This is the fine print.</small></p>
				<p>The following is <strong>bold text</strong>.</p>
				<p>The following is <em>italicized text</em>.</p>
				<p>Citation by <cite title="Nowhere Important">Nowhere Important</cite></p>
				<p>Abbreviations look like <abbr title="abbreviation">abbr</abbr>.</p>
				<p>ABCDEFGHIJKLMNOP QRSTUVWXYZ<br/>abcdefghijklmnop qrstuvwxyz<br/>1234567890</p>
				<p class="is-family-sans-serif">Sans serif</p>
				<p class="is-family-monospace">Monospace</p>
				<p class="is-family-primary">Primary font</p>
				<p class="is-family-secondary">Secondary font</p>
				<p class="is-family-code">Code font</p>
			</div>
			<div class="column">
				<h2 class="title">Colors</h2>
				<div class="columns">
					<div class="column">
						<p class="has-text-white has-background-dark">White text</p>
						<p class="has-text-black">Black text</p>
						<p class="has-text-light has-background-grey">Light text</p>
						<p class="has-text-dark">Dark text</p>
						<p class="has-text-primary">Primary text</p>
						<p class="has-text-success has-background-success-light">Success text</p>
						<p class="has-text-info has-background-info-light">Info text</p>
						<p class="has-text-warning has-background-warning-dark">Warning text</p>
						<p class="has-text-danger">Danger text</p>						
						<p class="has-text-link">Link text</p>						
					</div>
					<div class="column">
						<p class="has-text-black-bis has-background-white-bis">Black BIS text</p>			
						<p class="has-text-black-ter has-background-white-ter">Black TER text</p>			
						<p class="has-text-grey-darker has-background-grey-lighter">Darker grey text</p>			
						<p class="has-text-grey-dark has-background-grey-light">Dark grey text</p>			
						<p class="has-text-grey">Grey text</p>			
						<p class="has-text-grey-light has-background-grey-dark">Light grey text</p>			
						<p class="has-text-grey-lighter has-background-grey-darker">Lighter grey text</p>			
						<p class="has-text-white-ter has-background-black-ter">White TER text</p>			
						<p class="has-text-white-bis has-background-black-bis">White BIS text</p>			
					</div>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<b-field>
					<b-input maxlength="300" type="textarea" v-model="content"></b-input>
				</b-field>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<h1 class="title is-1">{{ content }}</h1>
				<h1 class="subtitle is-1">{{ content }}</h1>
				<h2 class="title is-2">{{ content }}</h2>
				<h2 class="subtitle is-2">{{ content }}</h2>
			</div>
			<div class="column">
				<h3 class="title is-3">{{ content }}</h3>
				<h3 class="subtitle is-3">{{ content }}</h3>
				<h4 class="title is-4">{{ content }}</h4>
				<h4 class="subtitle is-4">{{ content }}</h4>
				<h5 class="title is-5">{{ content }}</h5>
				<h5 class="subtitle is-5">{{ content }}</h5>
				<h6 class="title is-6">{{ content }}</h6>
				<h6 class="subtitle is-6">{{ content }}</h6>				
			</div>
			<div class="column">
				<p>{{ content }}</p>
				<p><small>{{ content }}</small></p>
				<p><strong>{{ content }}</strong></p>
				<p><em>{{ content }}</em></p>
				<p><cite :title="content">{{ content }}</cite></p>
				<p><abbr :title="content">{{ content }}</abbr>.</p>
				<p class="is-family-sans-serif">{{ content }}</p>
				<p class="is-family-monospace">{{ content }}</p>
				<p class="is-family-primary">{{ content }}</p>
				<p class="is-family-secondary">{{ content }}</p>
				<p class="is-family-code">{{ content }}</p>
			</div>
			<div class="column">
				<div class="columns">
					<div class="column">
						<p class="has-text-white has-background-dark">{{ content }}</p>
						<p class="has-text-black">{{ content }}</p>
						<p class="has-text-light has-background-grey">{{ content }}</p>
						<p class="has-text-dark">{{ content }}</p>
						<p class="has-text-primary">{{ content }}</p>
						<p class="has-text-success has-background-success-light">{{ content }}</p>
						<p class="has-text-info has-background-info-light">{{ content }}</p>
						<p class="has-text-warning has-background-warning-dark">{{ content }}</p>
						<p class="has-text-danger">{{ content }}</p>						
						<p class="has-text-link">{{ content }}</p>						
					</div>
					<div class="column">
						<p class="has-text-black-bis has-background-white-bis">{{ content }}</p>			
						<p class="has-text-black-ter has-background-white-ter">{{ content }}</p>			
						<p class="has-text-grey-darker has-background-grey-lighter">{{ content }}</p>			
						<p class="has-text-grey-dark has-background-grey-light">{{ content }}</p>			
						<p class="has-text-grey">{{ content }}</p>			
						<p class="has-text-grey-light has-background-grey-dark">{{ content }}</p>			
						<p class="has-text-grey-lighter has-background-grey-darker">{{ content }}</p>			
						<p class="has-text-white-ter has-background-black-ter">{{ content }}</p>			
						<p class="has-text-white-bis has-background-black-bis">{{ content }}</p>			
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TextView',
		data() {
			return {
				content: ''
			}
		}
	}
</script>