import {useEffect, useState} from "react";
import {url} from "../config/url";
import {AdEntity} from "types";

interface Props {
    id: string;
}

export const SingleAd = ({id}: Props) => {
const [ad, setAd] = useState<AdEntity | null>(null)
    useEffect(()=> {
        (async ()=> {
           const res = await fetch(`${url}/${id}`)
           setAd(await res.json())
        })()
    }, [id])

    if (ad === null) {
        return <p>wczytywanie...</p>
    }

    return (
        <>
            <h2>{ad?.name}</h2>
            {ad.description && <p>{ad.price} PLN</p>}
            <p>{ad.description}</p>
            <a href={ad.url} target='_blank'>Otwórz ogłoszenie</a>

        </>


    )

}