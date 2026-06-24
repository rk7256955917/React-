import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
    <div className='nav'>
      <h3>Sheryians</h3>
      <div>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      </div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
