import React,{useState,useEffect} from 'react';
import Header from './Header'
import clienteAxios from "../config/axios";

const Contactos = (props) => {
    const isAdmin=props.location.state.admin
    const [state, setstate] = useState([])
    

    useEffect(() => {
        console.log('desde use effect')
        clienteAxios.get('/Contactos')
        .then ((res)=>{
            
            setstate(res.data.buscarContactos)
        })
        .catch((err)=>console.log(err))
    }, [])
    
    return (
        <div>
<Header adminValue={isAdmin}/>
<ul>
    {state.map(contacto=>(
        <li key={contacto._id}>
            <h2>
                {contacto.nombre}
            </h2>
        </li>
    ))}
</ul>
        </div>
    

        
     );
}
 
export default Contactos;