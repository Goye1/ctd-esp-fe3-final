import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { theme } = useContextGlobal();
  const formClassName = theme === "dark" ? "backDark" : "back";

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) =>
        console.error("Error fetching dentist details:", error)
      );
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <section className={formClassName}>
      <section className="container">
        <h1 className={`title is-3 pad ${formClassName}`}>
          Details for dentist {dentist.name}
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Cellphone number</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>
                <a>{dentist.website}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Detail;
