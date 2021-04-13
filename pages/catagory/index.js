import React from 'react'
import Layout from '../../components/Layout'
import { useRouter } from "next/router";

  export async function getServerSideProps() {
    console.log('fetching..')
    try {
      const res = await fetch(`https://inventory.eduiot.repl.co/api/categorys/`, {method: 'GET'})
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

export default function Catagory(props) {
    const router = useRouter();
    const data = props.data
    const columns = Object.keys(data[0]).map((index)=>{
      var result = index.replace( /([A-Z])/g, " $1" );
      var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      return {"title": finalResult}
    });

    return (
    <Layout> 
    <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
        {columns.map(({ title }) => (
          <th class="text-left py-3 px-4 font-semibold text-sm">{title}</th> 
        ))}
        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
    {data.map(({categoryId, categoryName, shortOrder}) => (
        <tr>
          <td class="text-left py-3 px-4">{categoryId}</td>
          <td class="text-left py-3 px-4">{categoryName}</td>
          <td class="text-left py-3 px-4"><a class="hover:text-blue-500" >{shortOrder}</a></td>
          <td class="text-left py-3 px-4">
            <a class="hover:text-green-500 text-blue-500" onClick={()=>router.push(router.pathname+"/" + categoryId)} ><i class="bx bx-edit"></i>Edit</a>
            <a class="hover:text-red-500 text-blue-500" onClick={()=>deleteEmp(db.id)} >  <i class="bx bx-task-x"></i>Delete</a>
          </td>
        </tr>
    ))}
    </tbody>
    </table>
  </div>

    </Layout>
    )
  }