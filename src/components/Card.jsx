export const Card =(props)=>{
    const {imagen,nombre,edad,aldea,rango,afiliacion, jutsu, estado}= props
    return(
        <div className="cardPersonaje">
        <img src={`/img/${imagen}`} alt="" />
        <div>
        <h2>{nombre}</h2>
        <p>Edad: {edad}</p>
        <p>Aldea: {aldea}</p>
        <p>Rango: {rango}</p>
        <p>Afiliación: {afiliacion}</p>
        <p>Jutsu_destacado:{jutsu}</p>
        <p>Estado: {estado}</p>
        </div>
        </div>
    )
}