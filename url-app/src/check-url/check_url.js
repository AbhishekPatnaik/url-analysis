import React,{ useState, useEffect, useContext } from 'react';
import axios from "axios";
import Url_info from "../check-url/url_info"
import "./check-url.css";

function Check_url(props) {
    const [url, setUrl] = useState("");
    const [updated, setUpdated] = useState();
    const client = axios.create({
        baseURL: "https://just-run-this.onrender.com/get-url-info/" 
     });
    const handleChange = (event) => {
        setUrl(event.target.value);

      };
    const callUrlApi = (event) => {
        client.get('?q='+url).then((response) => {
            setUpdated(response.data);
            console.log(response.data);
         });
    }

    const handleClick = () =>{
        callUrlApi()
    }  
    return (
        <div>
            <h1 style={{color:"blue"}}>URL IT App</h1>
            <div class="input-container"> <input type="text"
            id="url"
            name="URL"
            onChange={handleChange}
            value={url} placeholder="https://suitejar.com"></input>
            </div>
            <button onClick={handleClick}>Submit</button>
            <div>{typeof(updated) !== "undefined" && updated['pages'].map((inf)=><Url_info url={inf.url} word_count={inf.word_count}></Url_info>)}</div> 
       
        </div>
    );

}

export default Check_url;