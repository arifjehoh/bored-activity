<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    {{this.$store.state.user.uid}}
    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
      } catch (err) {
        error.value = err.message
      }
    }
    return { handleSubmit, email, password, error }
  }
}
</script>
