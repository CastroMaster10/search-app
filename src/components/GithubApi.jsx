import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {Media} from 'react-bootstrap';
import Ratings from "../components/Ratings";

const GithubApi = () => {

    const [data,setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [rating,setRating] = useState(1);

    useEffect(() => {
        getData();
}, [])

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        getData()

    }

    const getData = () => {
         
           axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
           .then((res) => {
             setData(res.data.items);
             setIsLoading(false);
           });
    }

    const listUsers = data.map( user =>{
        return (
          <Media key={user.id}>
            <img
              width={64}
              height={64}
              className="mr-3"
              src={user.avatar_url}
              alt="User Profile Picture"
            />
            <Media.Body>
              <a href={user.html_url}>
                <h5> Login: {user.login}</h5>
              </a>
                <Ratings rating = {1}/>  
              <p>Id: {user.id}</p>
            </Media.Body>
          </Media>
        );
    })

    return (
      <div>
        <form onSubmit= {handleSubmit}>
          <input
            type="text"
            onChange={event => setSearchTerm(event.target.value)}
          />
          <button type="submit"> Search</button>
        </form>
        {isLoading && <ReactLoading type="spokes" color="#000000" />}
        {listUsers}
      </div>
    );
}

export default GithubApi