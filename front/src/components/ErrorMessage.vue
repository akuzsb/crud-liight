<template>
	<div v-if="message" class="error-message">
		<p>{{ message }}</p>
	</div>
</template>

<script>
export default {
	props: {
		message: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped>
.error-message {
	color: red;
	margin-top: 10px;
}
</style>