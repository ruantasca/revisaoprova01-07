import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <Link to='/dogs'>Fotos de dogs</Link>
            <br/>
            <Link to="/busca-cep">Pesquisar um CEP</Link>
        </div>
    )
}