import axios from 'axios'
import { Dashboard } from '../models/dashboard'

class DashboardService {
  async load(): Promise<Dashboard> {
    const response = await axios.get<Dashboard>(
      'http://localhost:3000/dashboard',
    )
    return response.data
  }
}

export default new DashboardService()
