import { NavLink} from "react-router-dom";

const Navbar = () =>{

    return(
        <>
       <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container-fluid">
    <NavLink to ="/" className="navbar-brand" >Inicio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <NavLink to="/nosotros" className="nav-link" aria-current="page" >Nosotros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacto" className="nav-link" >Contacto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link" aria-disabled="true">Blog</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/> 
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;