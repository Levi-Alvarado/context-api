import Galeria from "../components/Galeria";

export default function Favoritos() {


  return (
    <div>
      <h1>Fotos favoritas</h1>
      <Galeria onlyLiked={true} />
    </div >
  );
}