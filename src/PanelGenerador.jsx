import { useState } from "react"

const OPCIONES_LISTA = [
  { clave: "mayusculas", etiqueta: "Mayúsculas", descripcion: "A–Z", caracteres: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { clave: "minusculas", etiqueta: "Minúsculas", descripcion: "a–z", caracteres: "abcdefghijklmnopqrstuvwxyz" },
  { clave: "numeros",    etiqueta: "Números",    descripcion: "0–9", caracteres: "0123456789" },
  { clave: "simbolos",   etiqueta: "Símbolos",   descripcion: "!@#", caracteres: "!@#$%^&*()_+-=[]{}|;:,.<>?" },
]

const OPCIONES_INICIALES = {
  mayusculas: true,
  minusculas: true,
  numeros:    true,
  simbolos:   false,
}

export default function PanelGenerador({ alGenerar }) {
  const [longitud, setLongitud] = useState(16)
  const [opciones, setOpciones] = useState(OPCIONES_INICIALES)

  const alternarOpcion = (clave) => {
    const activas = Object.values(opciones).filter(Boolean).length
    if (opciones[clave] && activas === 1) return
    setOpciones((prev) => ({ ...prev, [clave]: !prev[clave] }))
  }

  const generarContrasena = () => {
    let pool = ""
    OPCIONES_LISTA.forEach(({ clave, caracteres }) => {
      if (opciones[clave]) pool += caracteres
    })
    let resultado = ""
    for (let i = 0; i < longitud; i++)
      resultado += pool[Math.floor(Math.random() * pool.length)]
    alGenerar(resultado)
  }

  return (
    <>

      <div className="gen-compacto">

        <div className="gen-compacto__header">
          <span className="gen-compacto__titulo">Generador pro</span>
          <span className="gen-compacto__badge">Pro</span>
        </div>

        <div className="gen-compacto__slider-fila">
          <span className="gen-compacto__slider-label">Longitud</span>
          <input
            type="range"
            min={6} max={32} step={1}
            value={longitud}
            onChange={(e) => setLongitud(Number(e.target.value))}
            className="gen-compacto__slider"
          />
          <span className="gen-compacto__slider-valor">{longitud}</span>
        </div>

        <div className="gen-compacto__opciones">
          {OPCIONES_LISTA.map(({ clave, etiqueta, descripcion }) => {
            const activo = opciones[clave]
            const bloqueado = activo && Object.values(opciones).filter(Boolean).length === 1
            return (
              <div
                key={clave}
                className={`gen-compacto__opcion
                  ${activo   ? "gen-compacto__opcion--activo"   : ""}
                  ${bloqueado ? "gen-compacto__opcion--bloqueado" : ""}`}
                onClick={() => alternarOpcion(clave)}
                title={bloqueado ? "Al menos una opción debe estar activa" : ""}
              >
                <span className={`gen-compacto__opcion-check ${activo ? "gen-compacto__opcion-check--activo" : ""}`}>
                  {activo ? "✓" : ""}
                </span>
                <span className="gen-compacto__opcion-label">{etiqueta}</span>
                <span className="gen-compacto__opcion-desc">{descripcion}</span>
              </div>
            )
          })}
        </div>
        <div className="gen-compacto__footer">
          <button
            className="boton boton--acento"
            onClick={generarContrasena}
          >
            Generar
          </button>
        </div>
      </div>
    </>
  )
}