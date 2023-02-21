import { createContext, useEffect, useState } from 'react'

const NavContext = createContext()

function NavProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handler)

    return () => {
      window.removeEventListener('popstate', handler)
    }
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setCurrentPath(to)
  }

  return (
    <NavContext.Provider value={{ currentPath, navigate }}>
      {/* <div>
        <button onClick={() => navigate('/accordion')}>Go to Accordion</button>
        <button onClick={() => navigate('/dropdown')}>Go to Dropdown</button>
      </div> */}

      {children}
    </NavContext.Provider>
  )
}

export { NavProvider }
export default NavContext
