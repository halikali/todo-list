import api from 'core/Api'

class UserService {
  static async Login(email: string, password: string) {
    const response = (await api.post('/user/login', { email, password })).data
    return response
  }

  static async Register(email: string, password: string, name: string) {
    const response = (await api.post('/user/register', { name, email, password })).data
    return response
  }
}

export default UserService
