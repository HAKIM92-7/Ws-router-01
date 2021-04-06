import React from 'react'
import {Link} from 'react-router-dom'
const Card = ({user}) => {
    return (
        <div>
        
        <div class="card">
  <h5 class="card-header">{user.name}</h5>
  <div class="card-body">
    <h5 class="card-title">{user.email}</h5>
    <h6>{user.company.name}</h6>
    <p class="card-text">{user.address.city}</p>
    <Link to={`/profile/${user.id}` }class="btn btn-primary">Go Profile</Link>
  </div>
</div>




        </div>
    )
}

export default Card
