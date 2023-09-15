import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import doctor from "../images/doctor.jpg";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentists, setDentists] = useState([]); // Definir un estado para almacenar los dentistas favoritos

  useEffect(() => {
    const dentistsJSON = localStorage.getItem("favorites");
    
    if (dentistsJSON) {
      const parsedDentists = JSON.parse(dentistsJSON);
      setDentists(parsedDentists); // Actualizar el estado con los dentistas favoritos
    }
  }, []); // Asegúrate de proporcionar un arreglo vacío como dependencia para que useEffect se ejecute solo una vez

  return (
    <>
    <section className="back">
      <section className="container">
      <h1 className="title is-3 pad">
            {dentists.length === 0
              ? "No saved dentists yet"
              : "Saved dentists"}
          </h1>
        <div className="card-container">
          {dentists.map((dentist) => (
            <div key={dentist.id} className="card cards column">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={doctor} alt={`${dentist.name}`} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title">{dentist.name}</p>
                <p className="subtitle">@{dentist.username}</p>
                <h4 className="title is-5">{dentist.company.name}</h4>
                <h4 className="d">"{dentist.company.catchPhrase}"</h4>
                  <a>{dentist.website}</a>
              </div>
              <div className="card-content">
              </div>
            </div>
          ))}
        </div>
      </section>
      </section>
    </>
  );
};

export default Favs;