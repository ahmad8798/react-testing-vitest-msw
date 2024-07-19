import React, { useEffect, useState } from 'react'

const User = () => {

    const [todos,setTodos] = useState([])

    async function fetchData(){
        try{
            const res = await fetch('https://dummyjson.com/todos')
            const resUser = await res.json()
            setTodos(resUser.todos)
            console.log(resUser.todos,"this is response user")
            console.log(todos)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        {todos.length && <div>todo{todos.length}</div>}
    </div>
  )
}

export default User
