<template>
	<div class="col-md-4">
		<h2>{{head}}</h2>
		<p>{{description}}</p>
		<p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
	</div>
</template>

<script>
export default {
	props: ['head', 'description']
}
</script>
