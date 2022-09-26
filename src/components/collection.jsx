import axios from 'axios';
import React,{useState, useEffect} from 'react';
import Active from './active';
import Button from './button';
import Coming from './coming';

const Collection = () => {

    const [coleciones, setcoleciones] = useState([]);
    const [contador, setcontador] = useState(0);

    

    useEffect(() => {
       const getCollecion = async ()=>{
        const url ='https://www.estudiofgl.com.ar/dapp_test/'; 
         const result = await axios.get(url);
         setcoleciones(result.data);
        
        }
      
        getCollecion();
        
    }, []);

   
    return (
        <>
                
                {coleciones.map((coleccion) =>{
                    
                    if(coleccion.state === 'live_wl'){
                      
                        return (
                            
                            <Active data={coleccion} key={coleccion.collection_id}/>
                        )
                    }else{
                        return(
                            <Coming  data={coleccion} key={coleccion.collection_id} />
                        )
                 }
                    
                })}
         

      
        </>
    );
}

export default Collection;
