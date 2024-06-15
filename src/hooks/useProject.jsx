import HTTP from '@/axios/axios-config.js'

const useProject = () => {
  const createProject = async ({ name, category, budget, dueDate, image, members }) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('category', category)
    formData.append('budget', budget)
    formData.append('dueDate', dueDate)
    formData.append('image', image)
    members.map((item) => formData.append('members', item))
    try {
      const { response } = await HTTP.post('/project', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response
    } catch (error) {
      console.error('create failed:', error)
      throw error
    }
  }
  return { createProject }
}
export default useProject
