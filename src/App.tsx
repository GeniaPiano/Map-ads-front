import React from 'react';
import './App.css'

export const App =()=> {

  return (
    <>
      <header>
        <h1>
            <strong> Mega </strong> ogłoszenia
        </h1>
        <button>Dodaj ogłoszenie</button>
        <div className="searchDiv">
            <input type="text"/> <button>Szukaj</button>
        </div>

      </header>
      <div className="map"> </div>
    </>
  );
}

