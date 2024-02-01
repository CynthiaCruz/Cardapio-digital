import { useState } from "react";
import Hashtaurante from "./assets/hashtaurante.webp";
import "./App.css";
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

export function App() {
  const paginasMenus = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return <>
          <img src={Hashtaurante} alt="" className="capa"/>
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
          <div className="menu">
            { paginasMenus[paginaSelecionada].map(item => 
              <ItemCardapio  
                nome={item.nome} 
                preco={item.preco}
                descricao={item.descricao}
                imagem={item.imagem}
              />) }
          </div>
         </>
}