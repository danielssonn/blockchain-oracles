import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TransactionProvider } from './context/TransactionContext'
import { Staking } from './pages'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <TransactionProvider>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="staking" element={<Staking />} />
        </Routes>
      </React.StrictMode>
    </TransactionProvider>
  </BrowserRouter>,
  rootElement
)
