import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const AddNewMovie = () => {
const [data, setdata] = useState('')
    const [details, setDetails] = useState({
        title:"",
        director:"",
        publishDate:"",
        genre:""
    });
    const param = useParams()

    const handleChange=(e)=>{
        const {name,value}=e.target
        setDetails({
            ...details,
            id:new Date()+1,
            [name]:value
        })
    }
    const postMovie=async(data)=>{
      let res =await axios.post("https://mockserver2-4byl.onrender.com/movies",data)
      return res
    }
    const getDataById=async(id)=>{
      let res= await axios(`https://mockserver2-4byl.onrender.com/movies?q=${id}`)
      return res
    }

    const handleSubmit=async()=>{
       let result= await postMovie(details)
       console.log(result)
    }
    useEffect( ()=>{
      if(param){
         setdata(getDataById(param.id))
      }
    },[])
  return (
    <>
    <Navbar/>
    <Box  w="40%" m="auto" mt="100px">
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Add New Movie
          </Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Movie Title</FormLabel>
                  <Input type="text" name="title" onChange={handleChange} value={details.title}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="director">
                  <FormLabel>Movie Director</FormLabel>
                  <Input type="text" name="director" onChange={handleChange} value={details.director}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="genre" isRequired>
              <FormLabel>Movie Genre</FormLabel>
              <Input type="text" name="genre" onChange={handleChange} value={details.genre}/>
            </FormControl>
            <FormControl id="year" isRequired>
              <FormLabel>Published Year</FormLabel>
              
                <Input type={"text"} name="publishDate" onChange={handleChange} value={details.publishDate} />
               
         
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                onClick={handleSubmit}
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Submit
              </Button>
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
    </>
  )
}

export default AddNewMovie