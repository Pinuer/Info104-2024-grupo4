import "@/app/globals.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  ListItem,
  UnorderedList,
  Text,
  Link,
  Box,
  Stack
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import ListComments from "./comments/ListComments";
import CrearComentario from "./comments/CrearComentario";

const DrawerComponent = ({ isOpen, onClose, currentValue, array }) => {
  const [comentarios, setComentarios] = useState([]);
  const [usuario, setUsuario] = useState("");
  const [comentario, setComentario] = useState("");
  const [enRespuestaA, setEnRespuestaA] = useState("");
  const [cambio, setCambio] = useState(true);
  const { btnOpen } = useRef();
  console.log(currentValue);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/getIdApp?idApp=Cerveceria&idItem=" + currentValue.id);
      const comment = await response.json();
      setComentarios(comment)
    };
    fetchData();
  }, [cambio, currentValue]);

  return (
    <>
      <Drawer finalFocusRef={btnOpen} isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent className="Drawer">
          <DrawerCloseButton className="buttonRight"/>

          <DrawerHeader className="drawer-title" fontSize={"3xl"}>
            {currentValue.nombre}
          </DrawerHeader>
          
          {currentValue.linkD && (
            <Text textAlign="center" mt={2} mb={4}>
              <Link href={currentValue.linkD} isExternal color="white">
                Ver en Google Maps
              </Link>
            </Text>
          )}

          <DrawerBody className="drawerList">
            <Stack >
              <Box>
              <Text fontSize="2xl" fontWeight="bold" mb={1} mt={1}>
                Tipos de Cerveza:
              </Text>
              </Box>
              <UnorderedList>
                {array.map((info, index) => {
                  const state = info.estado;
                  if (state === 1) {
                    return (
                      <ListItem key={index}>{info.tipo}</ListItem>
                    )
                  }
                  return null;
                })}
              </UnorderedList>
              <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Premios:
              </Text>
              </Box>
            <UnorderedList>
              {currentValue.premios != null ? 
                currentValue.premios.map((service, index) => (
                  <ListItem key={index} >{service}</ListItem>
                )):<Text>No ha ganado ningun premio</Text>}
            </UnorderedList>
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Comentarios:
              </Text>
            </Box>
            <UnorderedList>
              <CrearComentario
                usuario={usuario}
                setUsuario={setUsuario}
                comentario={comentario}
                setComentario={setComentario}
                idItem={currentValue.id}
                enRespuestaA={enRespuestaA}
                setEnRespuestaA={setEnRespuestaA}
                cambio={cambio}
                setCambio={setCambio}
              />
              <Box>
                <ListComments comentarios={comentarios} />
              </Box>   
            </UnorderedList>
            </Stack> 
          </DrawerBody>     
                 
          <DrawerFooter>
            <Button className = "buttonBack" variant="outline" size={"md"} mr={2} onClick={onClose}>
              Volver
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
