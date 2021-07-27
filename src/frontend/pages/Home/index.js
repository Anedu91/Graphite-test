import { Link } from "react-router-dom"

const Home = () => {
  //Rendering the home Page
  return (
      <div className="h-screen | flex items-center justify-center | bg-primary">
        <header className="flex flex-col justify-center items-center">
          <h1 className="md:text-6xl text-2xl mb-16 text-white">Welcome to Recipe Master</h1>
          <Link to="/recipes" className="px-3 py-4 | uppercase font-semibold md:text-2xl text-lg text-white border-4 border-white hover:bg-white hover:text-blue-400 transition">Start now</Link>
        </header>
      </div>
  )
}
export default Home 
