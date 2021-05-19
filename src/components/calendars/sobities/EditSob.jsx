import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditSob = () => {
  let history = useHistory();
  const { id } = useParams();
  const [sobitie, setSobitie] = useState({
    namesob: "",
    opisaniesob: "",
    datasob: "",
    servissob: "",
  });

  const { namesob, opisaniesob, datasob, servissob } = sobitie;
  const onInputChange = (e) => {
    setSobitie({ ...sobitie, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadSobitie();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/sobities/${id}`, sobitie);
    history.push("/googleCalendar");
  };

  const loadSobitie = async () => {
    const result = await axios.get(`http://localhost:3001/sobities/${id}`);
    setSobitie(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Sobitie</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="namesob"
              value={namesob}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="opisaniesob"
              value={opisaniesob}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder=""
              name="datasob"
              value={datasob}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="servissob"
              value={servissob}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Sobitie</button>
        </form>
      </div>
    </div>
  );
};

export default EditSob;
