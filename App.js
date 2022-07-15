import Navbar from "./Nav"
import Isaiah from "./pages/isaiah"
import Jodi from "./pages/jodi"
import Jordan from "./pages/jordan"

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
        Component = Isaiah
        break
        case "/jordan":
          Component = Jordan
          break
          case "/jodi":
            Component = Jodi
            break
  }
  return (
  <>

  <Navbar />
    <Component />
    </>
    )
}

export default App