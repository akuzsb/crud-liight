<template>
	<div>
		<form @submit.prevent="updateUser">
			<label>Email:</label>
			<input type="email" v-model="dataForm.email" required />

			<label>Nombre:</label>
			<input type="text" v-model="dataForm.name" required />

			<label>Apellido:</label>
			<input type="text" v-model="dataForm.lastname" required />

			<label>Password:</label>
			<input type="password" v-model="dataForm.password" required />

			<div class="button-group">
				<button type="submit" :disabled="isLoading">{{ buttonText }}</button>
			</div>

			<ErrorMessage v-if="errorMessage" :message="errorMessage" />
		</form>
	</div>
</template>

<script>
import axiosFetch from '@/utils/axiosFetch';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
	components: {
		ErrorMessage,
	},
	props: {
		userId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			dataForm: {
				email: '',
				name: '',
				lastname: '',
				password: '',
			},
			errorMessage: '',
			isLoading: false,
			buttonText: 'Actualizar Usuario',
		};
	},
	async created() {
		try {
			const response = await axiosFetch(`/users/${this.userId}`);
			const { data: user } = response;

			for (const key in this.dataForm) {
				this.dataForm[key] = user[key];
			}

		} catch (error) {
			console.log(error);
			this.errorMessage = 'Error al cargar el usuario';
		}
	},
	methods: {
		async updateUser() {
			try {
				this.errorMessage = '';
				this.isLoading = true;
				this.buttonText = 'Cargando...';
				await axiosFetch.put(`/users/${this.userId}`, this.dataForm);
				this.$emit('userUpdated');
			} catch (error) {
				this.errorMessage = 'Error al actualizar el usuario';
				console.log(error);
			} finally {
				this.isLoading = false;
				this.buttonText = 'Actualizar Usuario';
			}
		}
	},
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
	padding: 15px;
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