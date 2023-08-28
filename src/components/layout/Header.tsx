import React from 'react';
import './Header.css'
import {Button} from "../common/Button";

export const Header = () => (
    <header>
        <h1>
            <strong> Mega </strong> ogłoszenia
        </h1>
        <Button text="dodaj ogłoszenie"/>
        <div className="searchDiv">
            <input type="text"/>
            <Button text="szukaj"/>
        </div>

    </header>
)