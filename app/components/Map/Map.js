import "leaflet/dist/leaflet.css";
import "@/app/globals.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useState } from "react";
import L from "leaflet"; // Import leaflet
import DrawerComponent from "@/app/components/DrawerComponent";
import { useDisclosure } from "@chakra-ui/react";
import Icons from "./iconos";

const CustomIcon = L.Icon.extend({
  options: {
    iconSize: [36, 36], // Tamaño del icono
    popupAnchor: [-3, -76], // Punto desde donde se mostrará el popup en relación al icono
  },
});

function Map({ data, tipos }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentValue, setCurrentValue] = useState({});
  const [currentArray, setCurrentArray] = useState([]);

  return (
    <>
      <MapContainer
        center={[-39.830054, -73.234515]}
        zoom={15}
        scrollWheelZoom={true}
        className="homeMap"
        onClick={() => {
          console.log("map");
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((values) => {
          let coincidencias = 0;
          let filtros = 0;

          tipos.forEach((tipo) => {
            const estado = tipo.state;
            const indice = tipo.indice;
            if (estado) {
              filtros += 1;
              if (values.tipos[indice].estado) {
                coincidencias += 1;
              }
            }
          });

          if (coincidencias >= filtros || filtros === 0) {
            return (
              <Marker
                key={values.id}
                position={values.coordenadas}
                icon={new CustomIcon({
                  iconUrl: Icons(values.tipos),
                })}
                eventHandlers={{
                  click: () => {
                    onOpen();
                    setCurrentValue(values);
                    setCurrentArray(values.tipos);
                  },
                }}
              ></Marker>
            );
          } else {
            return null; // Explicitly return null if the condition is not met
          }
        })}
      </MapContainer>
      <DrawerComponent
        currentValue={currentValue}
        isOpen={isOpen}
        onClose={onClose}
        array={currentArray}
      />
    </>
  );
}

export default Map;
