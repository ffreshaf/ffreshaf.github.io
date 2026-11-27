import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Tools from "./pages/Tools"
import Contact from "./pages/Contact"
import PageLayout from "./components/PageLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PageLayout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
