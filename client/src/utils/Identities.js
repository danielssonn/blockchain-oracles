import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const { loadEntity, checkUserName } = useContext(TransactionContext)

export class EmployeeID {
  constructor () {
    this.colleagueDataTemplate = {
      profile: 'user',
      fullName: 'Your Colleague Name',
      jobTitle: 'Check your colleague\'s staking details',
      stakingPool: 0,
      totalStakers: 0
    }

    this.colleagues = [{ value: '', label: '' }]
    this.colleaguesInfoData = []
  }

  async getEmployeeIdData () {
    const employeeAddress = await loadEntity()
    employeeAddress.map(async addr => {
      const name = await checkUserName(addr)
      this.colleagues.value = name
      this.colleagues.label = name
    })
  }
}
