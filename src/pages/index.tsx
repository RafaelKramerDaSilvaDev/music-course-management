import { Tabs } from '../components/UI/Tabs'
import { Dashboard } from './dashboard'
import { NewStudent } from './new-student'
import { RegisterPayment } from './register-payment'

export const Main = () => {
  return Tabs({
    names: ['Dashboard', 'Novo Aluno', 'Registrar Pagamento'],
    colors: ['blue', 'yellow', 'green'],
    content: [Dashboard, NewStudent, RegisterPayment],
  })
}
