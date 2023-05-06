import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

const SearchInput = ({text,setText,handleSearch}) => {
  return (
    <Box w="60%" m={"auto"} mt="80px" display="flex" gap={4} justifyContent={"space-between"} >

        <Input placeholder='Search for movies' value={text} onChange={(e)=>setText(e.target.value)}/>
        <Button color={"white"} bg={"blue.400"} onClick={()=>handleSearch()}>Search</Button>
    </Box>
  )
}

export default SearchInput