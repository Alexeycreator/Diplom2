import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sobitie = () => {
  const [sobities, setSobities] = useState([]);

  useEffect(() => {
    loadSobities();
  }, []);

  const loadSobities = async () => {
    const result = await axios.get("http://localhost:3001/sobities");
    setSobities(result.data.reverse());
  };

  const deleteSob = async (id) => {
    if (window.confirm("Вы уверены?")) {
      await axios.delete(`http://localhost:3001/sobities/${id}`);
      loadSobities();
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>События календаря</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название события</th>
              <th scope="col">Дата события</th>
              <th scope="col">Операции</th>
            </tr>
          </thead>
          <tbody>
            {sobities.map((sob, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{sob.namesob}</td>
                <td>{sob.datasob}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/sobities/${sob.id}`}>
                    Информация
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/sobities/edit/${sob.id}`}
                  >
                    Изменить
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteSob(sob.id)}
                  >
                    Удалить
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-primary mr-2" to="/sobities/add">
          Добавить событие
        </Link>
      </div>
    </div>
  );
};

export default Sobitie;
