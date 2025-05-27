import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/blog' element={<Blog />}>
            <Route path='/blog/:id' element={<BlogDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
