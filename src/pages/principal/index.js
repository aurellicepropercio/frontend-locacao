import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/img/descansando.jpg'
export default function Principal(){
    return(
        <div className="principal-container">
           <div className="head-container">
               <div className='logo-container'>
               <img src={Logo} className="logo" />
               </div>
               <div className='head-main-container'>
                meio
               </div>
               <div className='entrar-container'>
               <Link to="/logon" className='link'>Entrar</Link>
               </div>
           </div >
           <div className="main-container">
            <h1>Meio</h1>
            <img src={require("../../assets/img/farm.jpg")} alt="My Image" />
            <img src={require("../../assets/img/foto1.avif")} alt="My Image" />
           </div>
           <div className="footer-container">
           <h1>Rodapé</h1>
           </div>
        </div>
    )
}