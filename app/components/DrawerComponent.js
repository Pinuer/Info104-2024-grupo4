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
  Box
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
          <DrawerCloseButton />

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

          <DrawerBody>
            <DrawerHeader>
              <Text fontSize="2xl" fontWeight="bold" mb={1} mt={1}>
                Tipos de Cerveza:
              </Text>
            </DrawerHeader>
            <DrawerBody>
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
            </DrawerBody>
          </DrawerBody>
          
          <DrawerBody>
            <DrawerHeader>
              <Text fontSize="2xl" fontWeight="bold">
                Premios:
              </Text>
            </DrawerHeader>

            <UnorderedList>
              {currentValue.premios &&
                currentValue.premios.map((service, index) => (
                  <ListItem key={index} >{service}</ListItem>
                ))}
            </UnorderedList>
          </DrawerBody>

          <DrawerBody>
            <DrawerHeader>
              <Text fontSize="2xl" fontWeight="bold">
                Comentarios:
              </Text>
            </DrawerHeader>
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
          </DrawerBody>     

          <DrawerFooter>
            <Button variant="solid" size={"lg"} mr={3} onClick={onClose}>
              Volver
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
