<template>
	<div>
		<h2>Editar Usuario</h2>
		<router-link to="/users" class="back-link">Volver</router-link>
		<UserEditForm :userId="$route.params.id" @userUpdated="handleUserUpdated" />
	</div>
</template>

<script>
import UserEditForm from '../components/Users/UserEditForm.vue';

export default {
	components: {
		UserEditForm,
	},
	methods: {
		handleUserUpdated() {
			this.$router.push('/users');
		},
	},
};
</script>