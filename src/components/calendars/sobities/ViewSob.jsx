import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewSob = () => {
  const [sobities, setSobities] = useState({
    namesob: "",
    opisaniesob: "",
    datasob: "",
    servissob: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadSobities();
  }, []);

  const loadSobities = async () => {
    const res = await axios.get(`http://localhost:3001/sobities/${id}`);
    setSobities(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/googleCalendar">
        Вернуться назад
      </Link>
      <h1 className="display-4">id события: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">
          Название события: {sobities.namesob}
        </li>
        <li className="list-group-item">
          Описание события: {sobities.opisaniesob}
        </li>
        <li className="list-group-item">Дата события: {sobities.datasob}</li>
        <li className="list-group-item">
          Сервис события: {sobities.servissob}
        </li>
      </ul>
    </div>
  );
};

export default ViewSob;
