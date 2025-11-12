import React from "react";

const CardGame = ({game}) => {
  const { name,   playtime,background_image } = game;
  // const [save, setSave] = useState(false)
  return (
  
      <article className="card" >
          <header>
            <img src={background_image} alt={name} />
          </header>
        <section>
          <h3>{name}</h3>
          <p>{}</p>
        </section>
        <footer>
          <small>{ playtime}</small>
        </footer>
      </article>
  
  );
};

export default CardGame;
