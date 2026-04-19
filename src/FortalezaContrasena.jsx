import { useState } from "react"
import MedidorFortaleza from "./MedidorFortaleza"

function calcularPuntaje(pw) {
  if (!pw) return 0
  let pts = 0
  if (pw.length >= 8) pts++
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) pts++
  if (/[0-9]/.test(pw) && /[^A-Za-z0-9]/.test(pw)) pts++
  if (pw.length >= 12) pts = Math.min(3, pts + 1)
  return Math.min(3, Math.max(pts, pw.length >= 8 ? 1 : 0))
}

export default function FortalezaContrasena() {
  const [contrasena, setContrasena] = useState("")
  const [mostrarTexto, setMostrarTexto] = useState(false)
  const puntaje = calcularPuntaje(contrasena)
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
          <MedidorFortaleza puntaje={puntaje} longitud={contrasena.length} />
        </div>

      </div>
    </div>
  )
}