import React from 'react';
import './styles/comming.css';
const Coming = ({data}) => {
    return (
        
        <div className='comming' key={data.collection_id}>
             
            <img src={data.url} alt={data.collection_name}/>
            <h4>{data.collection_name}</h4>
            <p>Entry Price: {data.price_wl}</p>
            <p>Users WhiteListed</p>
            <p>{data.users_wl}</p>
   
        </div>
    );
}

export default Coming;
