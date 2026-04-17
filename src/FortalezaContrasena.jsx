import { useState } from "react"

export default function FortalezaContrasena() {
  const [contrasena, setContrasena] = useState("")
  const [mostrarTexto, setMostrarTexto] = useState(false)

  return (
    <div className="contenedor-app">
      <div className="aplicacion">

        <div className="encabezado">
          <span className="encabezado__punto" />
          <h1 className="encabezado__titulo">Fortaleza de contraseña</h1>
        </div>

        <div className="tarjeta">
          <p className="tarjeta__etiqueta">Tu contraseña</p>
          <div className="campo-contrasena">
            <input
              className="campo-contrasena__input"
              type={mostrarTexto ? "text" : "password"}
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="Escribe una contraseña..."
              autoComplete="off"
              spellCheck={false}
            />
            <button
              className="campo-contrasena__boton-ojo"
              onClick={() => setMostrarTexto((v) => !v)}
              title={mostrarTexto ? "Ocultar" : "Mostrar"}
            >
              {mostrarTexto ? "🙈" : "👁"}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}