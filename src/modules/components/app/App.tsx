import { Outlet } from "react-router-dom"

//Components
import { Footer } from "../../shared/components/footer"
import { Navigation } from "../../shared/components/navigation"

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App