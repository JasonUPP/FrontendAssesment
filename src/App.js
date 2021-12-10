import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Field } from './table/Field';
import  Bootbox  from  'bootbox-react';

function App() {
  
  const [countries, setCountries] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [info, setinfo] = useState('g');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data =>{
      data.sort(
        (a,b) => 
        a.altSpellings[a.altSpellings.length-1].
        localeCompare(b.altSpellings[b.altSpellings.length-1])
       );
       setCountries(data);
      });
  }, [])

  const handleClose = () => {
      console.log("You closed Alert!");
      return setShowAlert(false);
  }

  return (
    <div>
      {
        countries &&
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Oficial Name</th>
                <th scope="col">Capital</th>
                <th scope="col">Region</th>
                <th scope="col">Language</th>
                <th scope="col">Population</th>
                <th scope="col">Flag</th>
              </tr>
            </thead>
            <tbody>
           
              {
                countries.map(country => (
                  <Field 
                    key = {country.area}
                    {...country}
                    setShowAlert = {setShowAlert}
                    setinfo = {setinfo}
                  />
                ))
              }           
            </tbody>
          </table>
        </div>
      }

      <Bootbox show={showAlert} 
          type={"alert"}  
          message={info}  
          onClose={handleClose} 
      />
    </div>
  );
}

export default App;