<template>
	<div class="users-header">
		<h2>Usuarios</h2>
		<button @click="logout">Cerrar sesión</button>
	</div>
</template>

<script>
export default {
	methods: {
		logout() {
			localStorage.removeItem('token');
			this.$router.push('/login');
		}
	}
};
</script>

<style scoped>
.users-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}

button {
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;
	border-radius: 5px;
}
</style>