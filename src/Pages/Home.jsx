import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Movie from "../Components/Movie";
import axios from "axios";
import SearchInput from "../Components/SearchInput";


const getData=async()=>{

  let res= await axios("https://mockserver2-4byl.onrender.com/movies")
  return res

}

const getSearchData=async(query)=>{
  let res= await axios(`https://mockserver2-4byl.onrender.com/movies?q=${query}`)
  return res
}
const Home = () => {
  const [data, setData]=useState([])
  const [text,setText]=useState("")


  const handleSearch=async()=>{
    let result= await getSearchData(text)
    setData(result.data)
  }

  useEffect(()=>{
    getData().then((res)=>setData(res.data))
  },[])

  return (
    <>
      <Navbar />
      <SearchInput text={text} setText={setText} handleSearch={handleSearch}/>
      <Movie data={data}/>
    </>
  );
};

export default Home;
