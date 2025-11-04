const BASE_URL = 'http://localhost:3000'
const findAll = async () => {
  try {
    const response = await fetch(`${BASE_URL}/blogPosts`)
    if (!response.ok) {
      throw new Error(`Error fetching blog posts: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

const findById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/blogPosts/${id}`)
    if (!response.ok) {
      throw new Error(`Error fetching blog post with id ${id}: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
export default { findAll, findById }
