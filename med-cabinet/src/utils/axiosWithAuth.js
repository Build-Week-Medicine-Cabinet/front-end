import axios from 'axios'

export const axiosWithAuth = () => {
  // axios request to access a protected route
  const token = localStorage.getItem('token')
  return axios.create({
    headers: {
      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    },
    baseURL: 'https://med-cabinet-tk-be.herokuapp.com/'
  })
}