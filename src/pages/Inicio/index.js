import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Cards from "components/Cards";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

export default function Inicio(){
    return(
        <>
        
        <Cabecalho/>
        <Banner imagem="home" />
        <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <Cards id='1' titulo = 'Renan Lucena' capa= 'https://github.com/renanlucena.png'/>
        <Rodape />
        </>
        )
}