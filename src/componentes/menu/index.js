import './styles.css';
import {Link} from 'react-router-dom';
export default function Menu(){
    return(
        <div>
            <h1>Menu</h1>
            <nav>
                <Link to="/listausuario" className='link'>Usuário</Link>
                <Link to="/listaestabelecimento" className='link'>Estabelecimento</Link>
                <Link to="/listalocacao" className='link'>Locação</Link>
                <Link to="/listacliente" className='link'>cliente</Link>
            </nav>
        </div>
    )
}