import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=100')
      .then(response => {
        setUsers(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className='title-container'>Lista de usuarios random </h1>
      <table className='table-container'>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Foto</th>
            <th>Nombre completo</th>
            <th>Correo</th>
            <th>Género</th>
            <th>Celular</th>
            <th>País</th>
            <th>Ciudad</th>
            <th>Calle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={user.picture.thumbnail} alt="Foto de perfil" />
              </td>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.cell}</td>
              <td>{user.location.country}</td>
              <td>{user.location.city}</td>
              <td>{`${user.location.street.name} ${user.location.street.number}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
