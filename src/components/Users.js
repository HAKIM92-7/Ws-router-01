import React, { useState , useEffect} from 'react'
import Card from './Card'
import axios from 'axios'



const Users = () => {


useEffect(() => {
  
 axios.get("https://jsonplaceholder.typicode.com/users") 
 .then((res) => {
     
    setUsers(res.data)
     setLoading(false)

})

 .catch ((err) => console.log(err))


}, [])


const [users , setUsers] = useState (null)
const [loading , setLoading] = useState (true)


    return (
        <div>
    {  
      users && !loading ?

       users.map((el,i) => (

       <Card key={i} user={el} />


       ) ) : '......'




    }

            
        </div>
    )
}

export default Users

