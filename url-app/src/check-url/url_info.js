import React from 'react';
import "./url_info.css";

function Url_info(props) {
    return (
        <div class="card">
       
            <h3>Page Url:</h3> <p>{props.url}</p>
            <h3>Word Count</h3>
             <p>{props.word_count}</p>
           
           
        </div>
       
    );
}

export default Url_info;

