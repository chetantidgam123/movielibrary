import { Box, Button, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Movie = ({data}) => {
  const navigate=useNavigate()

  const gotoEdit = (id)=>{
    navigate('editmovie/'+id)
  }
  const dlt = async (id)=>{
    let res =await axios.delete(`https://mockserver2-4byl.onrender.com/movies?q=${id}`)
  }
  return (
    <Box w="80%" m={"auto"}  mt="70px" display={"grid"} gap={10} gridTemplateColumns={"repeat(4,1fr)"}  >
       {
        data?.map((ele)=>(
            <Box boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" p={2} key={ele._id?ele._id:ele.id}>
            <Box w="100%">
                <Image src='DummyImage.png'/>
            </Box>
            <Text fontWeight={"bold"} fontSize={"lg"}>{ele.title}</Text>
            <Text>Director : {ele.director}</Text>
            <Text>Published Year : {ele.publishDate}</Text>
            <Text>Genre : {ele.genre.name ? ele.genre.name :ele.genre}</Text>
            <Box display={"flex"} justifyContent={"space-between"}>

            <Button >More </Button>
            <Button onClick={()=>{gotoEdit(ele._id)}} >Edit </Button>
            <Button onClick={()=>{dlt(ele._id)}}>Delete </Button>
            </Box>
        </Box>
        ))
       }
        
       
    </Box>
  )
}

export default Movie