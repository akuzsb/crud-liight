<template>
	<div class="login-form">
		<h2>Login</h2>
		<form @submit.prevent="login">
			<div class="form-group">
				<label>Email:</label>
				<input type="email" v-model="email" required>
			</div>

			<div class="form-group">
				<label>Password:</label>
				<input type="password" v-model="password" required>
			</div>

			<ErrorMessage v-if="errorMessage" :message="errorMessage" />

			<button type="submit">Login</button>
		</form>

		<!-- Mostrar el componente ErrorMessage si hay un mensaje de error -->
	</div>
</template>

<script>
// import axios from 'axios';
import axiosFetch from '../utils/axiosFetch';
import ErrorMessage from './ErrorMessage.vue'; // Importa el componente de mensaje de error

export default {
	data() {
		return {
			email: 'augustosn24@gmail.com',
			password: 'chichu',
			errorMessage: ''
		};
	},
	components: {
		ErrorMessage
	},
	methods: {
		async login() {
			try {
				const response = await axiosFetch.post('/login', {
					email: this.email,
					password: this.password
				});
				const token = response.data.token;
				localStorage.setItem('token', token);
				this.$router.push('/users');
			} catch (error) {
				console.error('Error en el login:', error);
				this.errorMessage = error.response?.data?.msg || 'Hubo un error en el login, intente nuevamente';
			}
		}
	}
};
</script>

<style scoped>
.login-form {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.form-group {
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

input {
	padding: 0.5rem;
	font-size: 1rem;
	width: 250px;
}

button {
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;
	margin-top: 1rem;
}
</style>