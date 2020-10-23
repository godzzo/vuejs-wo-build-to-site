export default {
	template: `
	<div>
		<h3>{{title}} ({{year}})</h3>
		<p>
			{{description}}
		</p>
	</div>
	`,
	props: ["title", "description"],
	data() {
		return {
			year: 2020,
		};
	},
	mounted() {
		console.log("Test component mounted");
	},
}