import axios from 'axios'
import { DashboardModel } from '../models/dashboard-model'

class DashboardService {
  async load(): Promise<DashboardModel> {
    const response = await axios.get<DashboardModel>(
      'http://localhost:3000/dashboard',
    )
    return response.data
  }
}

export default new DashboardService()
