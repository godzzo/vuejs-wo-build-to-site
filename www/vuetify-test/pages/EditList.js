export default {
	template: `
	<v-container>
		<v-row class="text-center">
			<v-col cols="4">
				<v-list>
					<v-subheader>REPORTS</v-subheader>
					<v-list-item-group
						v-model="selectedItem"
						color="primary"
						@change="onItemClick"
					>
						<v-list-item
							v-for="(item, idx) in items"
							:key="idx"
						>
							<v-list-item-icon>
								<v-icon>mdi-heart</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title v-text="item.name + ' - cal: ' + item.calories"></v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-col>

			<v-col cols="6">
				<v-form
					ref="form"
					v-model="form.valid"
					lazy-validation
				>
					<v-text-field
						v-model="form.item.name"
						:counter="10"
						label="Name"
						required
					></v-text-field>

					<v-text-field
						v-model="form.item.calories"
						label="Calories"
						required
					></v-text-field>

					<v-btn
						:disabled="!form.valid"
						color="success"
						class="mr-4"
					>
						Validate
					</v-btn>

					<v-btn
						color="error"
						class="mr-4"
					>
						Reset Form
					</v-btn>

					<v-btn
						color="warning"
					>
						Reset Validation
					</v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
	`,
	methods: {
		onItemClick(event) {
			console.log('onItemClick', {event, sel: this.selectedItem, item: this.items[this.selectedItem]});
		}
	},
	watch: {
		selectedItem(value, oldValue) {
			console.log('watch.selectedItem', {ths: this, value, oldValue});

			this.form.item = this.items[this.selectedItem];
		}
	},
	data: () => ({
		selectedItem: null,
		form: {
			item: {
				name: null,
				calories: 0,
			},
			valid: null,
		},
		items: [
			{
			  name: 'Frozen Yogurt',
			  calories: 159,
			  fat: 6.0,
			  carbs: 24,
			  protein: 4.0,
			  iron: '1%',
			},
			{
			  name: 'Ice cream sandwich',
			  calories: 237,
			  fat: 9.0,
			  carbs: 37,
			  protein: 4.3,
			  iron: '1%',
			},
			{
			  name: 'Eclair',
			  calories: 262,
			  fat: 16.0,
			  carbs: 23,
			  protein: 6.0,
			  iron: '7%',
			},
			{
			  name: 'Cupcake',
			  calories: 305,
			  fat: 3.7,
			  carbs: 67,
			  protein: 4.3,
			  iron: '8%',
			},
			{
			  name: 'Gingerbread',
			  calories: 356,
			  fat: 16.0,
			  carbs: 49,
			  protein: 3.9,
			  iron: '16%',
			},
			{
			  name: 'Jelly bean',
			  calories: 375,
			  fat: 0.0,
			  carbs: 94,
			  protein: 0.0,
			  iron: '0%',
			},
			{
			  name: 'Lollipop',
			  calories: 392,
			  fat: 0.2,
			  carbs: 98,
			  protein: 0,
			  iron: '2%',
			},
			{
			  name: 'Honeycomb',
			  calories: 408,
			  fat: 3.2,
			  carbs: 87,
			  protein: 6.5,
			  iron: '45%',
			},
			{
			  name: 'Donut',
			  calories: 452,
			  fat: 25.0,
			  carbs: 51,
			  protein: 4.9,
			  iron: '22%',
			},
			{
			  name: 'KitKat',
			  calories: 518,
			  fat: 26.0,
			  carbs: 65,
			  protein: 7,
			  iron: '6%',
			},
		]
	})
}
