import { useEffect, useState } from "react";
import { useContextGlobal } from "../Components/utils/global.context";
import doctor from "../images/doctor.jpg";
import React from "react";

const Home = () => {
  const { data } = useContextGlobal();
  const [favorites, setFavorites] = useState([]);
  const { theme } = useContextGlobal();
  const formClassName = theme === "dark" ? "backDark" : "back";

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (dentist) => {
    const isFavorite = favorites.some((fav) => fav.id === dentist.id);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== dentist.id);
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, dentist];
      setFavorites(updatedFavorites);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (dentist) => {
    return favorites.some((fav) => fav.id === dentist.id);
  };

  return (
    <main className={formClassName}>
      <section className="container">
        <h1 className={`title is-3 pad ${formClassName}`}>Doctors:</h1>

        <div className="card-container">
          {data.map((dentist) => (
            <div
              key={dentist.id}
              className={`card cards column ${isFavorite(dentist) ? "b" : ""}`}
            >
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={doctor} alt={`Image of ${dentist.name}`} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title">{dentist.name}</p>
                <p className="subtitle">@{dentist.username}</p>
                <h4 className="d">"{dentist.company.catchPhrase}"</h4>
              </div>
              <footer className="card-footer fut">
                <p className="card-footer-item">
                  <a href={`/dentist/${dentist.id}`}>Details</a>
                </p>
                <p
                  className={`card-footer-item save`}
                  onClick={() => toggleFavorite(dentist)}
                >
                  <span>{isFavorite(dentist) ? "Remove" : "Save"}</span>
                </p>
              </footer>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
