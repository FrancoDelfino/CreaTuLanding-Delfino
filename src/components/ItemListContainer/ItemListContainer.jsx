import React from "react";
import {Flex} from "@chakra-ui/react"

const ItemListContainer = ({ title }) => {
  return (
    <Flex alignContent={"center"} fontSize={"xx-large"} background={"grey"} width={"20vh"} height={"10vh"}>
      <h1>{title}</h1>
    </Flex>
  );
};

export default ItemListContainer;
