import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import NavBar from "./components/NavBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {

  return (
    <>
    <ShoppingCartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ShoppingCartProvider>
    
    </>
    
  )
}

export default App
