import React, {useContext, useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon'

import './Map.css'
import 'leaflet/dist/leaflet.css'
import {SearchContext} from "../../contexts/SearchContext";

export const Map = () => {

    const {search} = useContext(SearchContext);
    useEffect(() => {
        console.log('req to Api', search)
    },[])

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
            <MapContainer center={[52.2322986,21.0058034]} zoom={15}>
                <TileLayer
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[52.2322986,21.0058034]}>
                    <Popup>
                        <h2>Muzeum ewolucji</h2>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}