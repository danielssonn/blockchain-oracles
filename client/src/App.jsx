import { useEffect } from 'react'
import { Staking } from './pages'

const App = () => {
  useEffect(() => {
    window.process = {
      ...window.process
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Staking />
    </div>
  )
}

export default App
