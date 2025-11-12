import "../css/game.css";

const CardGame = ({ game }) => {
  const {
    name,
    background_image,
    released,
    rating,
    platforms: [{ platform: { name: platformName } }],
    genres: [{ name: genreName }]
  } = game;

  return (
    <article className="card">
      {/* Imagen principal */}
      <header className="card-header">
        <img src={background_image} alt={name} className="card-img" />
      </header>

      {/* Contenido principal */}
      <section className="card-body">
        <h3 className="card-title">{name}</h3>
        <p>📅 {released}</p>
        <p>💻 Plataforma: {platformName}</p>
        <p>🕹 Genero: {genreName}</p>
      </section>
      <footer className="card-footer"></footer>
      <span>{rating}</span>
    </article>
  );
};

export default CardGame;
