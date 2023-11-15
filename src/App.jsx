import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto" 
import Blog from "./pages/Blog" 
import Footer from "./Components/Footer"

const  App = () => {

  return(

    <>
    <Navbar/>
    <h1>Toyota</h1>
    <Routes>
      <Route element= {<Inicio/>} path="/"></Route>
      <Route element= {<Nosotros/>} path="/nosotros"></Route>
      <Route element= {<Contacto/>} path="/contacto"></Route>
      <Route element= {<Blog/>} path="/blog"></Route>
    </Routes>

     <Footer/>

    </>
  )

}
export default App;