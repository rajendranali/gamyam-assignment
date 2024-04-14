import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = ({ loading }) => {
  return (
    <div style={{padding:"30px"}}>
      {loading && (
        <Flex
          position="fixed"
          bottom="0"
          left="50%"
          transform="translateX(-50%)" 
          justifyContent="center"
          alignItems="center"
          zIndex={9999}
          width="100%"
        >
          <Spinner
            thickness="10px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
    </div>
  )
}

export default Loader

