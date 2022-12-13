import React,{useEffect} from 'react'
import { getAllContents } from '../../actions/contentActions'
import Card from '../../components/Card/Card'
import {useDispatch} from "react-redux"

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllContents())
  },[dispatch])

  return (
    <>
    <div>
      <Card />
    </div>

    </>

  )
}

export default Home