import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Logon from './pages/logon';
import Dashboard from './pages/dashboard';
import Listacliente from './pages/listaCliente';
import Listaestabelecimento from './pages/listaEstabelecimento';
import Listalocacao from './pages/listaLocacao';
import Listausuario from './pages/listarUsuario';
import Cadastrocliente from './pages/cadastroCliente';
import Cadastroestabelecimento from './pages/cadastroEstabelecimento';
import Cadastrolocacao from './pages/cadastroLocacao';
import Cadastrousuario from './pages/cadastroUsuario';
import Editarcliente from './pages/editarCliente';
import Editarestabelecimento from './pages/editarEstabelecimento';
import Editarlocacao from './pages/editarLocacao';
import Editarusuario from './pages/editarUsuario';
import Principal from './pages/principal';


export default function Rotas(){
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Principal />} />
            <Route path="/logon"  element={<Logon />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listausuario" element={<Listausuario />} />
            <Route path="/listaestabelecimento" element={<Listaestabelecimento />} />
            <Route path="/listalocacao" element={<Listalocacao />} />
            <Route path="/listacliente" element={<Listacliente />} />
            <Route path="/cadastrocliente" element={<Cadastrocliente />} />
            <Route path="/cadastroestabelecimento" element={<Cadastroestabelecimento />} />
            <Route path="/cadastrolocacao" element={<Cadastrolocacao />} />
            <Route path="/cadastrousuario" element={<Cadastrousuario />} />
            <Route path="/editarcliente/:id" element={<Editarcliente />} />
            <Route path="/editarestabelecimento/:id" element={<Editarestabelecimento />} />
            <Route path="/editarlocacao/:id" element={<Editarlocacao />} />
            <Route path="/editarusuario/:id" element={<Editarusuario />} />
             
            </Routes>
       
       </BrowserRouter>

    )
}