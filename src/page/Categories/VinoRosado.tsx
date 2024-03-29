import React from "react";
import Navbar from "../../components/Navbar";
import imgVino from "../../assets/img/rosadoVino.jpg";
import "./VinoRosado.css";

function VinoRosado() {
  return (  
    <section>
      <Navbar />
      <h1>Un poco de historia del Vino Rosado</h1>
      <div className="wine-blanco">
        <img src={imgVino} alt="imagen del vino rosado" />
        <p>
          La historia del vino rosado es igualmente rica y diversa, con una
          tradición que se remonta a miles de años atrás. Aunque quizás no tan
          prominente como la del vino tinto o blanco, el vino rosado ha tenido
          un papel significativo en la cultura vinícola mundial. Antigüedad: Se
          cree que la producción de vino rosado se remonta a la antigua Grecia y
          Roma, donde se elaboraban vinos mezclando uvas blancas y tintas. Estos
          vinos tenían un tono rosado y se consumían ampliamente en las
          celebraciones y banquetes de la época. <br />
          El vino rosado es muy versátil y puede maridar bien con una variedad
          de platos. Aquí tienes algunas sugerencias de acompañamientos para el
          vino rosado: <br /> <br />
          <b>1. Mariscos y pescados: </b> El vino rosado puede complementar
          perfectamente platos de mariscos como camarones, langostinos, ostras,
          así como pescados como salmón, trucha o lubina. <br />
          <b>2. Ensaladas: </b>Las ensaladas frescas con ingredientes como
          fresas, queso de cabra, nueces o vinagretas suaves pueden ser una
          excelente opción para acompañar el vino rosado. <br />
          <b>3. Platos de aves de corral: </b>El pollo a la parrilla, el pavo
          asado o incluso platos más elaborados como el pato confitado pueden
          combinar muy bien con vino rosado. <br />
          <b>4. Quesos suaves: </b> Quesos cremosos y suaves como el brie, el
          camembert o el queso de cabra pueden realzar los sabores del vino
          rosado. <br /> <b> 5. Platos de cocina asiática:</b> Platos asiáticos
          con sabores agridulces, picantes o a base de hierbas frescas pueden
          complementar bien el vino rosado, como sushi, curry tailandés o rolls
          vietnamitas.
        </p>
      </div>
    </section>
  );
}

export default VinoRosado;
