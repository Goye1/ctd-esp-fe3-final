import React, { useEffect, useState } from "react";
import doctor from "../images/doctor.jpg";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const [dentists, setDentists] = useState([]);
  const { theme } = useContextGlobal();
  const formClassName = theme === "dark" ? "backDark" : "back";

  useEffect(() => {
    const dentistsJSON = localStorage.getItem("favorites");

    if (dentistsJSON) {
      const parsedDentists = JSON.parse(dentistsJSON);
      setDentists(parsedDentists);
    }
  }, []);

  return (
    <>
      <section className={formClassName}>
        <section className="container">
          <h1 className={`title is-3 pad ${formClassName}`}>
            {dentists.length === 0 ? "No saved dentists yet" : "Saved dentists"}
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
                <div className="card-content"></div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Favs;
