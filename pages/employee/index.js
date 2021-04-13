import React from 'react'
import { useRouter } from "next/router";
import Layout from '../../components/Layout'

  export async function getServerSideProps() {
    console.log('fetching..')
    try {
      const res = await fetch(`http://localhost:3000/api/Employee`, {method: 'GET'})
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

export default function Employees(props) {
  const router = useRouter();
  const data = props.data
  const columns = [ 
      {
        title: 'First name',
        dataIndex: 'first_name',
        key: 'first_name',
      },
      {
        title: 'Last name',
        dataIndex: 'last_name',
        key: 'last_name',
      },
      {
        title: 'Activity',
        dataIndex: 'is_active',
        key: 'is_active',
       // render: text => <a>{text.toString()}</a>,
      },
      {
        title: 'Date of birth',
        dataIndex: 'date_of_birth',
        key: 'date_of_birth',
      },

    ];

    const items = columns.map((index)=>{ return  {data: index.dataIndex} })

    return (
    <Layout> 
    <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
        {columns.map(({ title, dataIndex, key }) => (
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">{title}</th> 
        ))}
        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th> 
        </tr>
      </thead>
    <tbody class="text-gray-700">
    {data.map((db) => (
        <tr>
          <td class="text-left py-3 px-4">{db.first_name}</td>
          <td class="text-left py-3 px-4">{db.last_name}</td>
          <td class="text-left py-3 px-4"><a class="hover:text-blue-500" >{db.is_active.toString()}</a></td>
          <td class="text-left py-3 px-4"><a class="hover:text-blue-500" >{db.date_of_birth}</a></td>
          <td class="text-left py-3 px-4">
            <a class="hover:text-green-500 text-blue-500" onClick={()=>router.push('/employees/' + db.id)} ><i class="bx bx-edit"></i>Edit</a>
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