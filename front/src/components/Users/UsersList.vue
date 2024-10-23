<template>
	<div class="users-list">
		<button @click="createUser">Crear nuevo usuario</button>
		<ErrorMessage :message="errorMessage" />

		<div v-if="users.length">
			<UserDetail v-for="user in users" :key="user.id" :user="user" @edit="editUser" @delete="deleteUser" />
		</div>

		<p v-else>No hay usuarios.</p>

	</div>
</template>

<script>
import axiosFetch from '../../utils/axiosFetch';
import UserDetail from './UserDetail.vue';
import ErrorMessage from '../ErrorMessage.vue';

export default {
	components: {
		UserDetail,
		ErrorMessage
	},
	data() {
		return {
			users: [],
			errorMessage: '',
		};
	},
	methods: {
		async fetchUsers() {
			try {
				this.errorMessage = '';
				const response = await axiosFetch.get('/users');
				this.users = response.data;
			} catch (error) {
				console.error('Error fetching users:', error);
				this.errorMessage = error.response?.data?.msg || 'Hubo un error al obtener los usuarios';
			}
		},
		createUser() {
			this.$router.push('/users/create');
		},
		editUser(user) {
			console.log('Editar usuario:', user);
			this.$router.push(`/users/edit/${user.iduser}`);
		},
		async deleteUser(user) {

			let confirmDelete = confirm('¿Estás seguro de eliminar este usuario?');
			if (confirmDelete) {
				try {
					this.errorMessage = '';
					const response = await axiosFetch.delete(`/users/${user.iduser}`);
					this.fetchUsers();
				} catch (error) {
					console.error('Error deleting user:', error);
					this.errorMessage = error.response?.data?.msg || 'Hubo un error al eliminar el usuario';
				}
			}
		}
	},
	mounted() {
		this.fetchUsers();
	}
};
</script>

<style scoped>
.users-list {
	margin-top: 20px;
}

button {
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;
	margin-bottom: 20px;
}
</style>