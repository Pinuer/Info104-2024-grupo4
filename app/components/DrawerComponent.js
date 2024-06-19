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
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

const DrawerComponent = ({ isOpen, onClose, currentValue, array }) => {
  const [usuario, setUsuario] = useState("");
  const [comentario, setComnetario] = useState("");
  const [enRespuestaA, setEnRespuestaA] = useState("");
  const [cambio, setCambio] = useState(true);
  const { btnOpen } = useRef();
  console.log(currentValue);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/peticionGetIdApp?idApp=Cerveceria&idItem=" + currentValue.id);
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
              <Text fontSize="2xl" fontWeight="bold" mb={2} mt={2}>
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
