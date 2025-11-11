import { ref } from 'vue'

const isAuthenticated = ref(false)

const logIn = async (username, password) => {
  console.log(`Logging in with username: ${username} and password: ${password}`)
  isAuthenticated.value = true
}

const logOut = async () => {
  console.log('Logging out')
  isAuthenticated.value = false
}

export { isAuthenticated, logIn, logOut }
