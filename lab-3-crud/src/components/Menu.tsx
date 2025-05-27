import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <menu className="text-xl flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
        </menu>
  )
}

export default Menu