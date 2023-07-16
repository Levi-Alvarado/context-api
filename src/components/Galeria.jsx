import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyAppContext from "../MyAppContext";

const Galeria = ({ onlyLiked = false }) => {
  const [fotos, setFotos] = useContext(MyAppContext);

  const marcarFavorito = (id) => {
    const fotoIndex = fotos.findIndex(foto => foto.id === id);
    if (fotoIndex !== -1) {
      const fotoActualizada = { ...fotos[fotoIndex], liked: !fotos[fotoIndex].liked };
      const nuevasFotos = [...fotos];
      nuevasFotos[fotoIndex] = fotoActualizada
      setFotos(nuevasFotos);
    }
  };

  const getPhotos = (foto) => {
    if (onlyLiked && !foto.liked) return null

    return (
      <div style={{ backgroundImage: `url(${foto.src.tiny})` }}
        className="foto"
        key={foto.id}
        onClick={() => marcarFavorito(foto.id)}>
        <Heart filled={foto.liked} />
        <p>{foto.alt}</p>
      </div>
    )
  }
  return (
    <div>
      {!onlyLiked && <h2>Galería de Fotos</h2>}
      <div className="galeria grid-columns-5 p-3">
        {fotos.map(getPhotos)}
      </div>
    </div>
  );
};

export default Galeria;