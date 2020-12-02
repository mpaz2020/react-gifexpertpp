// import React, { useState, useEffect } from "react";
import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export default function GifGrid({ categoria }) {
  

  const {data: images,loading}=useFetchGifs(categoria);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{categoria}</h3>

      {loading && <p className="animate__animated animate__flash">Cargando..</p>}

      <div className="card-grid">
        {
          images.map((img) => (
            <GifGridItem 
            key={img.id} 
            {...img}>            
            </GifGridItem>
          ))
        }
      </div>
    </>
  );
}
