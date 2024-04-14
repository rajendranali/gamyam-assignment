import React, { useState, useEffect, useCallback } from "react";
import Cards from "./Cards";
import { Box, Grid, Spinner, Flex } from "@chakra-ui/react";
import { fetchMoreDataFromAPI } from "../Logic/ApiFunction";
import Loader from "./Loader";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [apiCallInProgress, setApiCallInProgress] = useState(false);
  const [maxpage,setMaxpage]=useState(null)

  const fetchMoreData = useCallback(async () => {
    setApiCallInProgress(true);
    setLoading(true);
    try {
      const newData = await fetchDataFromAPI(page);
      updateData(newData);
      if(page<maxpage){
        setPage((prevPage) => prevPage + 1);
      }
     
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error gracefully
    } finally {
      setTimeout(() => {
        setLoading(false);
        setApiCallInProgress(false);
      }, 1000); // Display loading spinner for at least 1 second
    }
  }, []);

  const updateData = (newData) => {
    if (newData) {
      setCards((prevCards) => [...prevCards, ...newData]);
    }
  };

  const fetchDataFromAPI = async (page) => {
    const newData = await fetchMoreDataFromAPI(page);
    setMaxpage(Math.ceil(newData.count/ 10))
    return newData.results;
  };

  const handleInfiniteScroll = async () => {
    try {
      if (
        !apiCallInProgress &&
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
      ) {
        setApiCallInProgress(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [apiCallInProgress]);

  useEffect(() => {
    fetchMoreData();
  }, []);

  useEffect(() => {
    if (apiCallInProgress) {
      fetchMoreData();
    }
  }, [apiCallInProgress, fetchMoreData]);
console.log("maxpage",maxpage,page)
  return (
    <Box position="relative" textAlign="center">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
        width="96%"
        padding={2}
        justifyContent="center"
        alignContent="center"
        margin="0 auto"
      >
        {cards.map((card) => (
          <Cards key={card.id} card={card} />
        ))}
      </Grid>
      {loading && <Loader loading={loading} />}
    </Box>
  );
};

export default CardList;
