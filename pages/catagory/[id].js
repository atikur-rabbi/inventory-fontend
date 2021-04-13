import React from 'react'
import Layout from '../../components/Layout'
import { useRouter } from "next/router";

export async function getServerSideProps(context) { 
    console.log('fetching..')
    try {
      const res = await fetch(`https://inventory.eduiot.repl.co:443/api/categorys/${context.params.id}`, {method: 'GET'})
      const data = await res.json()
      if(!data)
      return {
        notFound: true,
      }
      return {
        props:{
          data,
        },
      }}catch(e) {
          console.log(e)
        }
  }