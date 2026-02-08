import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

// --- TUS FOTOS ---

// 1. Foto final (SÍ)
import fotoFinal from "./assets/foto_final.jpg"; 

// 2. Foto de PORTADA (fija al inicio)
import fotoPortada from "./assets/foto_portada.jpg";

// 3. Las 3 fotos que se repiten CUANDO DA CLICK EN NO
import fotoReaccion1 from "./assets/foto1.jpg";
import fotoReaccion2 from "./assets/foto2.jpg";
import fotoReaccion3 from "./assets/foto3.jpg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No, me das asko",
      "No, te odio",
      "Ya dale q si",
      "Porfis di q si",
      "Amor q te pasa",
      "Dale a siii",
      "Le das a si o me mato",
      "Ok ya t estas pasando",
      "Amor...",
      "Ya presiona q si",
      ":(",
      "Te acuerdas la vez q me cai",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // --- LÓGICA DE FOTOS ---
  const fotosBucle = [fotoReaccion1, fotoReaccion2, fotoReaccion3];
  
  // Si no ha dado click (0), muestra portada. 
  // Si ya dio click, cicla entre las 3 fotos de reacción.
  // (noCount - 1) sirve para que el primer click (1) muestre la foto del indice [0]
  const imagenAmostrar = noCount === 0 
    ? fotoPortada 
    : fotosBucle[(noCount - 1) % fotosBucle.length];

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          {/* FOTO CUANDO DICE QUE SÍ */}
          <img 
            src={fotoFinal} 
            className="h-[300px] rounded-lg shadow-lg object-cover" 
            alt="Nosotros felices"
          />
          <div className="text-4xl md:text-6xl font-bold my-4 text-center">
            Okk, te invito a un picnic bonito cuando volvamos a la playa T amo ❤️
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          
          {/* FOTO DINÁMICA (Portada o Bucle) */}
          <img
            className="h-[230px] rounded-lg shadow-lg object-cover transition-all duration-300"
            src={imagenAmostrar}
            alt="Nosotros"
          />
          
          <h1 className="text-4xl md:text-6xl my-4 text-center px-4">
            Kieres ser mi Valentine?
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Síi obvi
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <div className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 text-sm">
      Hecho por Alejandro Moreno<span role="img" aria-label="heart">❤️</span> para ti
    </div>
  );
};