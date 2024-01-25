"use client"
import Image from "next/image";
import { useEffect,useState } from "react";
import style from './foto.module.css'

function Perrito(){
    const[perrito,setPerrito]=useState("/vercel.svg");
    const [estado, setEstado]=useState("Esperando");
    const [habilidad, setHabilidad]=useState("Habilidad");

    const url = "https://pokeapi.co/api/v2/pokemon/charizard"
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data =>{setPerrito(data.sprites.front_default),setEstado(data.species.name),setHabilidad(data.abilities[0].ability.name)})
    }, []);

    return(
        <div className={style.box}>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perrito" width={500} height={500}/>
            <h1>{habilidad}</h1>
        </div>
    )
}

export default Perrito;