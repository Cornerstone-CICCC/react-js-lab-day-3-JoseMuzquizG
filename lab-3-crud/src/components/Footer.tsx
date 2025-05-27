import Menu from "./Menu"

const Footer = () => {
  return (
    <footer className="w-screen gap-3 text-center fixed bottom-0 p-4 mt-2 bg-gray-500 text-white flex flex-col items-center">
        <Menu />
        <p> Copyright {new Date().getFullYear()}.</p>
    </footer>
  )
}

export default Footer