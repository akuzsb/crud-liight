<template>
	<div class="create-user">
		<h2>Crear Usuario</h2>
		<router-link to="/users" class="back-link">Volver</router-link>
		<UserCreateForm @userCreated="handleUserCreated" />
	</div>
</template>

<script>
import UserCreateForm from '../components/Users/UserCreateForm.vue';

export default {
	components: {
		UserCreateForm
	},
	methods: {
		handleUserCreated() {
			this.$router.push('/users');
		}
	}
};
</script>

<style scoped>
.create-user {
	display: flex;
	flex-direction: column;
	padding: 20px;
}

.back-link {
	color: #ccc;
	padding: 8px 16px;
	background-color: #202020;
	border-radius: 5px;
	margin: 8px 0;
}
</style>