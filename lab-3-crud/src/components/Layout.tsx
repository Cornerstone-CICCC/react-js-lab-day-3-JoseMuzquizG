import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
  return (
    <div className='h-screen'>
        <Header />
        <main className="my-0 mx-auto p-3 max-w-7xl">
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout