import "@/app/globals.css";
import { 
  Input,
  Button, 
  Textarea,
  Menu, 
  MenuButton,
  MenuList,
  Box,
  background
} from "@chakra-ui/react";

const CrearComentario = ({
  usuario,
  setUsuario,
  comentario,
  setComentario,
  idItem,
  cambio,
  setCambio,
}) => {

  const sendRequest = async () => {
    const response = await fetch("/api/postComment", {
      method: "POST",
      body: JSON.stringify({
        usuario: usuario,
        idApp: "Cerveceria",
        idItem: idItem,
        comentario: comentario,
        timestamp: Date.now(),
        enRespuestaA: null
      }),
    });

    const data = await response.json();
    console.log(data);
    alert("Comentario creado");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendRequest();
    setUsuario("");
    setComentario("");
    setCambio(() => (!cambio));
  };

  return (
    <>
      <Menu size={"s"}>
        <MenuButton as={Button} mb={2} variant="solid" backgroundColor="white" _active={{backgroundColor: "gray"}}>
        Crear Comentario
        </MenuButton>

        <MenuList className="comment">
          <form onSubmit={handleSubmit}>
            <Box textAlign={"center"}>
            <Input placeholder="Usuario" bg="white" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            <Textarea placeholder="Comentario" bg="white" resize="none" value={comentario} onChange={(e) => setComentario(e.target.value)} />
            <Button type="submit">Crear</Button>
            </Box>
          </form>
        </MenuList>
      </Menu>
    </>
  );
};

export default CrearComentario;