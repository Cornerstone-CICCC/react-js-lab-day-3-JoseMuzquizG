import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="text-center">
        <h2>Welcome To the Blog!!</h2>
        <Link to="/blog">Read the blog</Link>
    </div>
  )
}

export default Home