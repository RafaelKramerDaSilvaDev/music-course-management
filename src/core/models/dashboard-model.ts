export interface DashboardModel {
  overview: {
    numberOfStudents: number
    newStudents: number
    studentsByModality: {
      keyboard: number
      accordion: number
    }
    cancellations: number
    paymentsReceived: number
    currentBalance: number
    amountsReceivable: number
    expectedBalance: number
  }
  estimates: {
    cancellationsEstimate: number
    expectedbalanceEstimate: number
  }
}
