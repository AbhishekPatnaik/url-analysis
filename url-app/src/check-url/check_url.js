import React,{ useState, useEffect, useContext } from 'react';
import axios from "axios";

function Check_url(props) {
    const [url, setUrl] = useState("");
    const [updated, setUpdated] = useState(url);
    const client = axios.create({
        baseURL: "https://just-run-this.onrender.com/get-url-info/" 
     });
    const handleChange = (event) => {
        setUrl(event.target.value);

      };
    const callUrlApi = (event) => {
        client.get('?q='+url).then((response) => {
            setUpdated(response.data);
         });
    }

    const handleClick = () =>{
        callUrlApi()
    }  
    return (
        <div>
            <h1>URL IT App</h1>
            <input type="text"
            id="url"
            name="URL"
            onChange={handleChange}
            value={url}></input>
            <div>{url}</div>
            <button onClick={handleClick}>Submit</button>
    <div>{updated}</div>
        </div>
    );
}

export default Check_url;