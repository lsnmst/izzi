import * as React from "react";
import {useState, useEffect, useMemo, useCallback} from 'react';
import '../index.css';
import Map, { Source, Layer } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import Izzi from './izzi';


function Language() {

    const languageStyle  = {
        id: 'point',
        type: 'line',
        paint: {
            'line-color' : '#f05157',
            'line-width' : 2,
            // 'fill-color' : '#00ffff',
            // 'fill-opacity' : '0',
            // 'fill-outline-color': '#00ffff' 
        }
      };

    return (

        <>
            <Map
                initialViewState={{
                    latitude: 6.456524613609937,
                    longitude: 8.137934464564653,
                    zoom: 6.5
                }}
                projection={"globe"}
                mapStyle="mapbox://styles/comuni-dados/ck87kqz1v0hlt1iptdomrfl1y"
                mapboxAccessToken="pk.eyJ1IjoiY29tdW5pLWRhZG9zIiwiYSI6ImNqdWxlaHRqbjIycjE0M3BpamY3a3c4aWUifQ.HGizp_QckKQVjAZnnw8qAg"
                fog={{ "horizon-blend": 0.5, "star-intensity": 0.15, "range": [0.8, 8], color: "#e3e5c7", "space-color": "#a66480", "high-color": "#000000" }}
                light={{ "anchor": "viewport", "color": "white", "intensity": 0.4 }}
                style={{ width: "null", height: "100vh" }}
            >

                <Source type="geojson" data={Izzi}>
                    <Layer {...languageStyle} />
                </Source>

            </Map>
        </>
    );
}

export default Language;
