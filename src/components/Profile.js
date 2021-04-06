import React, { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import './Profile.css'

const Profile = ({match}) => {

    useEffect(() => {
  
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${match.params.x}`) 
        .then((res) => {
            
            setPerson(res.data)

            console.log(res)
       
       })
       
        .catch ((err) => console.log(err))
       
       
       }, [])


    const [person , setPerson] = useState (null)

    return (
        <div>

{
   person? 

   <div>
<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>{person[0].name}</h6>
			<h6>{person[0].email}</h6>
			<a href="#"> <i class="fas fa-chevron-right"></i></a>
		</div>
		<div class="course-info">
			
			<h6>{person[0].address.city}</h6>
			<h2>{person[0].address.street}</h2>
			<button class="btn">Continue</button>
		</div>
	</div>
</div>


<div class="social-panel-container">
	<div class="social-panel">
		<p>Created with <i class="fa fa-heart"></i> by
			<a target="_blank" href="https://florin-pop.com">Florin Pop</a></p>
		<button class="close-btn"><i class="fas fa-times"></i></button>
		<h4>Get in touch on</h4>
		<ul>
			<li>
				<a href="https://www.patreon.com/florinpop17" target="_blank">
					<i class="fab fa-discord"></i>
				</a>
			</li>
			<li>
				<a href="https://twitter.com/florinpop1705" target="_blank">
					<i class="fab fa-twitter"></i>
				</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/florinpop17" target="_blank">
					<i class="fab fa-linkedin"></i>
				</a>
			</li>
			<li>
				<a href="https://facebook.com/florinpop17" target="_blank">
					<i class="fab fa-facebook"></i>
				</a>
			</li>
			<li>
				<a href="https://instagram.com/florinpop17" target="_blank">
					<i class="fab fa-instagram"></i>
				</a>
			</li>
		</ul>
	</div>
</div>
<button class="floating-btn">
	Get in Touch
</button>

<div class="floating-text">
	Part of <a href="https://florin-pop.com/blog/2019/09/100-days-100-projects" target="_blank">#100Days100Projects</a>
</div> 
</div>

: ".........."



}



            
        </div>
    )
}

export default Profile

