import axios from 'axios'
import { StudentModel } from '../models/student-model'

class StudentService {
  async create(data: StudentModel) {
    const response = await axios.post('http://localhost:3000/new-student', data)
    return response.data
  }
}

export default new StudentService()
