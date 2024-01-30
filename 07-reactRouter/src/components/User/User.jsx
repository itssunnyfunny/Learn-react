import React, { useId } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className=' bg-slate-700 text-red-500 text-center text-3xl m-2 p-3 max-w-full rounded-2xl'>User : {userId} </div>
  )
}

export default User