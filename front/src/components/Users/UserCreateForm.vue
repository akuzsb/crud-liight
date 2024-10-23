<template>
	<form @submit.prevent="createUser" class="user-create-form">
		<label>Email:</label>
		<input type="email" v-model="dataForm.email" required class="input-field" />

		<label>Nombre:</label>
		<input type="text" v-model="dataForm.name" required class="input-field" />

		<label>Apellido:</label>
		<input type="text" v-model="dataForm.lastname" required class="input-field" />

		<label>Contraseña:</label>
		<input type="password" v-model="dataForm.password" required class="input-field" />


		<div class="button-group">
			<button type="submit" class="submit-button">Crear Usuario</button>
		</div>
		<ErrorMessage v-if="errorMessage" :message="errorMessage" />
	</form>
</template>

<script>
import axiosFetch from './../../utils/axiosFetch';
import ErrorMessage from './../ErrorMessage.vue';

export default {
	data() {
		return {
			dataForm: {
				email: '',
				name: '',
				lastname: '',
				password: ''
			},
			errorMessage: ''
		};
	},
	components: {
		ErrorMessage
	},
	methods: {
		async createUser() {
			try {
				this.errorMessage = '';
				const response = await axiosFetch.post('/users', this.dataForm);
				this.$emit('userCreated');
			} catch (error) {
				console.error('Error al crear el usuario:', error);
				this.errorMessage = error.response?.data?.msg || 'Hubo un error al crear el usuario, intente nuevamente';
			}
		}
	}
};
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
	background-color: #2c2c2c;
	color: #f0f0f0;
	border: 1px solid #444;
	border-radius: 8px;
	padding: 8px 16px 32px;
	margin-bottom: 15px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

label {
	margin-top: 10px;
}

input {
	margin-bottom: 10px;
	padding: 0.5rem;
	font-size: 1rem;
}

.button-group {
	margin-top: 10px;
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