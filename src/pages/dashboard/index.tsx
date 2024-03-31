import { useQuery } from '@tanstack/react-query'
import { Card } from '../../components/UI/Card'
import { Group } from '../../components/UI/Group'
import { Wrapper } from '../../components/UI/Wrapper'
import dashboardService from '../../core/services/dashboard-service'

export const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['load-dashboard'],
    queryFn: dashboardService.load,
  })

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  const {
    numberOfStudents,
    newStudents,
    studentsByModality,
    paymentsReceived,
    currentBalance,
    amountsReceivable,
    expectedBalance,
    cancellations,
  } = data.overview

  const { cancellationsEstimate, expectedbalanceEstimate } = data.estimates

  return (
    <Wrapper>
      <Group title="Visão Geral">
        <Card title="Total de Alunos" content={numberOfStudents} color="blue" />
        <Card title="Novos Alunos" content={newStudents} color="blue" />
        <Card
          title="Alunos de Acordeon"
          content={studentsByModality.accordion}
          color="blue"
        />
        <Card
          title="Alunos de Teclado"
          content={studentsByModality.keyboard}
          color="blue"
        />
        <Card title="Trancamentos" content={cancellations} color="red" />
      </Group>

      <Group title="Financias">
        <Card
          title="Pagamentos Recebidos"
          content={paymentsReceived}
          color="green"
        />
        <Card title="Saldo Atual" content={currentBalance} color="green" />
        <Card
          title="Valores a Receber"
          content={amountsReceivable}
          color="green"
        />
        <Card title="Saldo Previsto" content={expectedBalance} color="green" />
      </Group>

      <Group title="Estimativas">
        <Card
          title="Trancamentos"
          content={cancellationsEstimate}
          color="yellow"
        />
        <Card
          title="Saldo Previsto"
          content={expectedbalanceEstimate}
          color="yellow"
        />
      </Group>
    </Wrapper>
  )
}
