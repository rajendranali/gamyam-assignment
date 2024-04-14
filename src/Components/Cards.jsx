import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdVerified } from "react-icons/md";

const Cards = ({ card }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === card?.land_media?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? card?.land_media?.length - 1 : prevIndex - 1
    );
  };
  console.log("Cards", card);
  return (
    <Card maxW="sm" borderRadius="lg" overflow="hidden" padding="2">
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="lg"
        width="100%"
        height="300px"
      >
        <Image
          src={
            card?.land_media[currentImageIndex]?.image
              ? card?.land_media[currentImageIndex]?.image
              : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
          }
          alt="Sofa"
          borderRadius="lg"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.1)" }}
          height="100%"
          width="100%"
          objectFit="cover"
        />

        <Button
          onClick={handlePrevImage}
          position="absolute"
          left="2%"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          bg="white"
          color="gray.300"
          border="none"
          borderRadius="50%"
          padding="8px"
          opacity={0.6}
        >
          <IoChevronBackSharp fontSize={"larger"} />
        </Button>

        <Button
          onClick={handleNextImage}
          position="absolute"
          right="2%"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          bg="white"
          color="gray.300"
          border="none"
          borderRadius="50%"
          padding="8px"
          opacity={0.6}
        >
          <IoChevronForwardSharp fontSize={"larger"} />
        </Button>

        <Box
          position="absolute"
          top="4"
          right="4"
          display="flex"
          alignItems="center"
          color="white"
          zIndex="1"
          fontSize="30px"
        >
          <Button
            onClick={handleNextImage}
            bg="white"
            color="gray.300"
            border="none"
            borderRadius="50%"
            padding="2px"
            opacity={0.5}
            marginRight="2"
          >
            <IoIosShareAlt fontSize={"larger"} />
          </Button>
          <Button
            onClick={handleNextImage}
            bg="white"
            color="gray.300"
            border="none"
            borderRadius="50%"
            padding="2px"
            opacity={0.5}
          >
            <FaRegHeart />
          </Button>
        </Box>
      </Box>
      <CardBody style={{ marginBottom: "10px" }}>
        {" "}
        {/* Adjust margin bottom as needed */}
        <Flex direction="row" align="center" justify="space-between">
          <Flex direction="column" align="flex-start" spacing="1">
            <Heading size="sm">
              {card.village_name}, {card.mandal_name}
            </Heading>
            <Heading size="sm">{card.district_name} (dt)</Heading>
          </Flex>
          <Flex align="center">
            <MdVerified
              style={{ color: "rgba(3, 157, 252)", fontSize: "23px" }}
            />
          </Flex>
        </Flex>
      </CardBody>
      <CardFooter marginTop={"-4 0px"}>
        {" "}
        {/* Adjust padding top as needed */}
        <ButtonGroup spacing="2">
          <Heading size="sm">
            {card.total_land_size_in_acres.acres !== 0 &&
              `${card.total_land_size_in_acres.acres} Acres`}
            {card.total_land_size_in_acres.guntas !== 0 &&
              `${card.total_land_size_in_acres.guntas} Guntas`}
            {card.total_land_size_in_acres.acres !== 0 &&
              card.total_land_size_in_acres.guntas !== 0 &&
              " • "}
            <span style={{ fontWeight: "lighter" }}>
              ₹{" "}
              {card.price_per_acre_crore.crore !== 0
                ? `${card.price_per_acre_crore.crore}.${card.price_per_acre_crore.lakh}`
                : card.price_per_acre_crore.lakh}
              {card.price_per_acre_crore.crore !== 0 ? "crore" : "lakh"}
              per acre
            </span>
          </Heading>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Cards;
