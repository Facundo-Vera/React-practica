//* Crea un componente App que renderice Header y un párrafo p con texto descriptivo.

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./Css/styles.css";

const App = () => {
  const nombre = "Maria";
  const edad = 21;
  const estaLogueado = false;
  const tareas = ["Hacer ejercicio", "Estudiar React", "Leer"];
  return (
    <div>
      <header>
        <Header />
        <p style={{ fontSize: 20 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          possimus ea accusantium dignissimos esse ex delectus dolores eum
          ratione eligendi, voluptatum vel fuga odio. Sapiente, vitae? Saepe
          facilis voluptatum beatae!
        </p>
      </header>
      <main>
        <p>
          {" "}
          {nombre}: {edad}
        </p>

        <div>
          {estaLogueado ? (
            "Bienvenido de vuelta"
          ) : (
            <button>Inicia secion</button>
          )}

          <ul>
            {tareas.map((tarea, index) => (
              <li key={index}>
                <span>{tarea}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
