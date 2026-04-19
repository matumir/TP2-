export default function MedidorFortaleza({ puntaje, longitud }) {

  const obtenerClaseBarra = (indice) => {
    if (puntaje === 0) return "";
    if (puntaje === 1 && indice < 1) return "medidor-fortaleza__relleno--debil medidor-fortaleza__relleno--activo";
    if (puntaje === 2 && indice < 2) return "medidor-fortaleza__relleno--medio medidor-fortaleza__relleno--activo";
    if (puntaje === 3)               return "medidor-fortaleza__relleno--fuerte medidor-fortaleza__relleno--activo";
    return "";
  };

  const etiquetas      = ["", "Poco segura", "Segura", "Muy segura"];
  const clasesInsignia = ["vacio", "debil", "medio", "fuerte"];

  return (
    <div className="medidor-fortaleza">

      <div className="medidor-fortaleza__barras">
        {[0, 1, 2].map((i) => (
          <div key={i} className="medidor-fortaleza__barra">
            <div className={`medidor-fortaleza__relleno ${obtenerClaseBarra(i)}`} />
          </div>
        ))}
      </div>

      {/* Insignia de nivel + contador de caracteres */}
      <div className="medidor-fortaleza__info">
        <span className={`medidor-fortaleza__insignia medidor-fortaleza__insignia--${clasesInsignia[puntaje]}`}>
          {etiquetas[puntaje] || "Sin evaluar"}
        </span>
        {longitud > 0 && (
          <span className="medidor-fortaleza__longitud">{longitud} caracteres</span>
        )}
      </div>

    </div>
  );
}