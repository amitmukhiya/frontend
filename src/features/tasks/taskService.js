import axios from 'axios'

const API_URL = '/api/tasks'

//create task
const createTask = async (goalData, token) => {
  const config = {
    headers: {
      autherization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

//Get user tasks
const getTasks = async (token) => {
  const config = {
    headers: {
      autherization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const taskService = {
  createTask,
  getTasks,
}

export default taskService
