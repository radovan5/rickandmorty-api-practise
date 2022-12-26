import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
    <div className='App'>
      <main>
        <header>
          <Navbar />
        </header>
        <div className='content'>
          <Home />
        </div>
      </main>
      <footer>Practise 2022</footer>
    </div>
  )
}

export default App
