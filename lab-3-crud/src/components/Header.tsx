import Menu from "./Menu"

const Header = () => {
  return (
    <header className="flex w-screen justify-around mb-4 p-6 bg-gray-200">
        <div className="text-2xl">Logo</div>
        <h1 className="text-3xl">Blog Page</h1>
        <Menu />
    </header>
  )
}

export default Header