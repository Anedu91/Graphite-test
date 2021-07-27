const NotFound = () => {
  return(
    <div className="h-screen | flex items-center justify-center | bg-primary">
        <header className="flex flex-col justify-center items-center">
          <h1 className="text-6xl mb-16 text-white">Sorry! Page not Found</h1>
          <Link to="/" className="px-3 py-4 | uppercase font-semibold text-2xl text-white border-4 border-white hover:bg-white hover:text-blue-400 transition">Go back</Link>
        </header>
      </div>
  )
}

export default NotFound