import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/utils/fixLeafletIcon";

import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customMarker = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function RecenterMap({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom(), { animate: true });
    return null;
}

export default function MapClient({ coords, name }) {
    return (
        <MapContainer
            center={coords}
            zoom={15}
            className="h-full w-full rounded-lg z-0"
        >
            <TileLayer url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" subdomains={["mt0", "mt1", "mt2", "mt3"]} />

            <Marker position={coords} icon={customMarker}>
                <Popup>{name}</Popup>
            </Marker>
            <RecenterMap coords={coords} />
        </MapContainer>
    );
}