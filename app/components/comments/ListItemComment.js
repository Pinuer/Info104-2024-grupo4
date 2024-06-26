"use client";
import { Box, Text } from "@chakra-ui/react";
const ListItemComment = ({ comentario }) => {
  const {comentario: comment, usuario} = comentario;

  return (
    <Box mb={3} borderRadius='5px' bg="#4a494f" paddingTop={2} paddingBottom={2} paddingLeft={5}>
      {/* ID's */}
      <Box >
        <Text >
          <b >Usuario: </b>
          {usuario}
        </Text>
      </Box>
      {/* COMENTARIO */}
      <Box >
        <Text>
          <b >Comentario: </b>
          {comment}
        </Text>
      </Box>
    </Box>
  );
};

export default ListItemComment;
