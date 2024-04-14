import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = ({ loading }) => {
  return (
    <div>
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
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
          />
        </Flex>
      )}
    </div>
  )
}

export default Loader

