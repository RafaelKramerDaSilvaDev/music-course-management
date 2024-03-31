import { Tabs } from '../components/UI/Tabs'
import { CreateStudentPage } from './create-student'
import { DashboardPage } from './dashboard'
import { RegisterPaymentPage } from './register-payment'

export const Main = () => {
  return Tabs({
    names: ['Dashboard', 'Novo Aluno', 'Registrar Pagamento'],
    colors: ['blue', 'yellow', 'green'],
    content: [DashboardPage, CreateStudentPage, RegisterPaymentPage],
  })
}
