import React, {SyntheticEvent, useContext, useState} from 'react';
import './Header.css'
import {Button} from "../common/Button";
import {SearchContext} from "../../contexts/SearchContext";

export const Header = () => {

   const [inputVal, setInputVal] = useState<string>('')
   const {setSearch} = useContext(SearchContext)

  const setSearchFromLocalState = (e: SyntheticEvent) => {
       e.preventDefault();
       setSearch(inputVal)
  }

    return (
    <header>
        <h1>
            <strong> Mega </strong> ogłoszenia
        </h1>
        <Button text="dodaj ogłoszenie"/>
        <form className="searchDiv" onSubmit={setSearchFromLocalState}>
            <input type="text"
                   value={inputVal}
                   onChange={(e) => setInputVal(e.target.value)}/>
            <Button text="szukaj"/>
        </form>

    </header>
)}