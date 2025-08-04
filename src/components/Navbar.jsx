import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useIdiom } from '../hooks/useIdiom'; 

function Navbar() {
  const idiom = useIdiom();
  
  return (
    <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: '#0e0e10' }}>
      <div className="container-fluid py-3">
        <div className="row w-100 text-center text-md-start align-items-center">

          {/* Título */}
          <div className="col-md-4 mb-2 mb-md-0">
            <h4 className="m-0 text-white fs-6 fs-md-4" style={{ wordBreak: 'break-word' }}>
              {idiom === 'en'
                ? 'Bruno Waschburger Silva | Personal portfolio'
                : 'Bruno Waschburger Silva | Portfólio pessoal'}
            </h4>
          </div>

          {/* Navegação */}
          <div className="col-md-4 d-flex justify-content-center flex-wrap mt-2 mt-md-0">
            {idiom === 'en' ? (
              <>
                <a className="nav-link text-white mx-2" href="#AboutMe">About me</a>
                <a className="nav-link text-white mx-2" href="#Projects">My Projects</a>
                <a className="nav-link text-white mx-2" href="#Contact">Contact</a>
              </>
            ) : (
              <>
                <a className="nav-link text-white mx-2" href="#AboutMe">Sobre mim</a>
                <a className="nav-link text-white mx-2" href="#Projects">Meus Projetos</a>
                <a className="nav-link text-white mx-2" href="#Contact">Contato</a>
              </>
            )}
          </div>

          {/* Idioma */}
          <div className="col-md-4 text-md-end mt-2 mt-md-0">
            <Link to="/pt" className="idiom-link text-white me-3">BR Português</Link>
            <Link to="/en" className="idiom-link text-white me-3">US English</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
