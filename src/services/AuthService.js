import BaseService from '@/services/BaseService.js'
import { TOKEN_NAME } from '@/configs/index.js'

export default class AuthService extends BaseService{
  static async auth(params) {
    return new Promise((resolve, reject) => {
      this.request()
        .post('/auth', params)
        .then(response => {
          localStorage.setItem(TOKEN_NAME, response.data.token)
          resolve(response)
        })
        .catch(error => reject(error.response))
    })
  }
}
