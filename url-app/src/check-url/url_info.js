import React from 'react';
import "./url_info.css";

function Url_info(props) {
    return (
        <div class="card">
       
            <p>{props.url}</p>
             <p>{props.word_count}</p>
        </div>
       
    );
}

export default Url_info;

