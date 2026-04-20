
const REQUISITOS = [
  { id: "longitud8",  texto: "Mínimo 8 caracteres",  verificar: (p) => p.length >= 8 },
  { id: "mayuscula",  texto: "Incluye mayúscula",     verificar: (p) => /[A-Z]/.test(p) },
  { id: "minuscula",  texto: "Incluye minúscula",     verificar: (p) => /[a-z]/.test(p) },
  { id: "numero",     texto: "Incluye un número",     verificar: (p) => /[0-9]/.test(p) },
  { id: "especial",   texto: "Carácter especial",     verificar: (p) => /[^A-Za-z0-9]/.test(p) },
  { id: "longitud12", texto: "Más de 12 caracteres",  verificar: (p) => p.length >= 12 },
];

export default function ListaRequisitos({ contrasena }) {
  return (
    <ul className="lista-requisitos">
      {REQUISITOS.map((req) => {
        const cumplido = req.verificar(contrasena);
        return (
          <li key={req.id} className={`requisito ${cumplido ? "requisito--cumplido" : ""}`}>
            <span className="requisito__icono">{cumplido ? "✓" : "·"}</span>
            {req.texto}
          </li>
        );
      })}
    </ul>
  );
}