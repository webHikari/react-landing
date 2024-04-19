import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

// Pages
import Index from './Components/Pages/Index/Index.jsx'
import Cash from './Components/Pages/Cash/Cash.jsx'
import Find from './Components/Pages/Find/Find.jsx'
import Docs from './Components/Pages/Docs/Docs.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/cash' element={<Cash />}/>
        <Route path='/docs' element={<Docs />}/>
        <Route path='/find' element={<Find />}/>
        <Route path='/*' element={<Index />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
