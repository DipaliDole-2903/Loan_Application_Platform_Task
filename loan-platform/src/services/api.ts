import axios from 'axios'

// Base Axios instance – ready for future API integration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.crednova.in/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor – attach auth token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('crednova_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor – global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('crednova_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// ── Future Endpoints ──
export const authAPI = {
  login: (email: string, mobile: string) =>
    api.post('/auth/login', { email, mobile }),
}

export const loansAPI = {
  getProducts: () => api.get('/loans/products'),
  apply: (data: object) => api.post('/loans/apply', data),
}

export const creditAPI = {
  getScore: () => api.get('/credit/score'),
  refresh: () => api.post('/credit/refresh'),
}

export const contactAPI = {
  submit: (data: { name: string; email: string; message: string }) =>
    api.post('/contact', data),
}

export default api
