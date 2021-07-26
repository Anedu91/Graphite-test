import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="h-screen | flex items-center justify-center | bg-gray-500">
        <header className="flex flex-col justify-center items-center">
          <h1 className="text-6xl mb-16">Welcome to Recipe Master</h1>
          <Link to="/recipes" className="px-3 py-4 | uppercase font-semibold text-2xl border-2">Start now</Link>
        </header>
      </div>
    </>
  )
}
export default Home 
