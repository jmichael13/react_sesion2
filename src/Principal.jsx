import { Card } from "./components/Card"
import { Navbar } from "./components/Navbar"
import './index.css'
import { personajes } from "./utils/personajes"


export const Principal = () => {
    return (
        <main>
            <Navbar />
            <h1>Princial</h1>
            {
                personajes.map((personaje)=>(
                    <Card 
                    nombre={personaje.nombre}
                    edad={personaje.edad}
                    aldea={personaje.aldea}
                    rango={personaje.edad}
                    afiliacion={personaje.afiliación}
                    jutsu={personaje.jutsu_destacado}
                    estado={personaje.estado}
                    />
            ))
            }
        </main>
    )
}