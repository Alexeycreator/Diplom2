import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const AddSob = () => {
  let history = useHistory();
  const [sobitie, setSobitie] = useState({
    namesob: "",
    opisaniesob: "",
    datasob: "",
    servissob: "",
  });

  const { namesob, opisaniesob, datasob, servissob } = sobitie;
  const ouInputChange = (e) => {
    setSobitie({ ...sobitie, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/sobities", sobitie);
    history.push("/googleCalendar");
  };

  return (
    <div className="container">
      <div className="w-75 ms-auto shadow p-5">
        <h2 className="text-center mb-4"> Добавить событие</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Введите название события"
              name="namesob"
              value={namesob}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Опишите событие"
              name="opisaniesob"
              value={opisaniesob}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Введите дату события"
              name="datasob"
              value={datasob}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="servissob"
              value={servissob}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">
            Добавить событие
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSob;
