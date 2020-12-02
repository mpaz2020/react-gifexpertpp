import React, { useState } from "react";
import AddCategoria from "./componentes/AddCategoria";
import GifGrid from "./componentes/GifGrid";

export default function GifExpertApp(){

  const [categorias, setCategorias] = useState(['samurai x']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategoria setCategorias={setCategorias}></AddCategoria>
      <hr></hr>

      <ul>
        {
            categorias.map(categoria =>            
            (                
                <GifGrid 
                key={categoria}
                categoria={categoria}
                ></GifGrid>
            )
            )
        }
      </ul>
    </>
  );
}


