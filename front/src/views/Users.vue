<template>
	<div class="users-page">
		<UsersHeader />
		<UsersList />
	</div>
</template>

<script>
import UsersHeader from '../components/Users/UsersHeader.vue';
import UsersList from '../components/Users/UsersList.vue';

export default {
	components: {
		UsersHeader,
		UsersList
	}
};
</script>

<style scoped>
.users-page {
	padding: 20px;
}
</style>