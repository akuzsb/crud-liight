<template>
	<div class="user-detail">
		<div class="header">
			<h3 class="user-name">{{ user.name }} {{ user.lastname }}</h3>
			<div class="button-group">
				<button @click="$emit('edit', user)">Editar</button>
				<button @click="$emit('delete', user)">Eliminar</button>
			</div>
		</div>
		<p class="user-email"><strong>Email:</strong> {{ user.email }}</p>
	</div>
</template>

<script>
export default {
	props: {
		user: {
			type: Object,
			required: true
		}
	}
};
</script>

<style scoped>
.user-detail {
	background-color: #2c2c2c;
	color: #f0f0f0;
	border: 1px solid #444;
	border-radius: 8px;
	padding: 15px;
	margin-bottom: 15px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.user-name {
	margin: 0;
	color: #ffffff;
}

.user-email {
	color: #b0b0b0;
}

.button-group {
	display: flex;
	gap: 10px;
}

button {
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;
	border: none;
	border-radius: 5px;
	transition: background-color 0.3s, transform 0.2s;
}
</style>