import React, {useContext, useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon'

import './Map.css'
import 'leaflet/dist/leaflet.css'
import {SearchContext} from "../../contexts/SearchContext";
import {SimpleAdEntity} from "types";
import {url} from "../config/url";
import {SingleAd} from "./SingleAd";

export const Map = () => {

    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([])
    useEffect(() => {
        (async () => {
          const res = await fetch(`${url}/search/${search}`);
          const data = await res.json();
          setAds(data)
            console.log('data', data)

        })();
    },[search])




    return (
        <div className="map">
            <MapContainer center={[52.2322986,21.0058034]} zoom={15}>
                <TileLayer
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {ads.map(ad => (
                    <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                        <Popup>
                            <SingleAd id={ad.id}/>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </div>
    )
}