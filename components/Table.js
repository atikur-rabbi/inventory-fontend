import React from 'react'
import { useRouter } from "next/router";

export default function Table ({data}){
  const router = useRouter();

  console.log(data)
  return (
    <div class="shadow overflow-hidden rounded border-b border-gray-200">
  </div>
  );
};