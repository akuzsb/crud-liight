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
</style>