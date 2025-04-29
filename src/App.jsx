import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ContextComponent from './components/ContextComponent'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow  container mx-auto max-w-7xl">
        <ContextComponent />
      </main>
      <Footer />
    </div>
  )
}

export default App