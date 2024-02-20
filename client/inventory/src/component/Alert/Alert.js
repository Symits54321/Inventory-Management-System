import React from 'react';
import { useState , useEffect } from 'react';
import style from './Alert.module.css';

import { useMainValue } from '../../Main.context';


function Alert(){

    const{message,setMessage} = useMainValue();
    
 // const [message,setMessage] = useState("");
    const [styleAnm, setStyleAnm] = useState( `${style.alertnone}` );

   // only ehwn message is changed
    useEffect(() => {

     
            
            setStyleAnm(`${style.alertheading}  ${style.alertAnimation}`);

            const timeout =   setTimeout(() => {
                setStyleAnm(`${style.alertnone}`);
                setMessage("");  
            }, 5000);
            
           

            return () => clearTimeout(timeout);
    
        

       

       
      
       
    }, [message]);



    return(
       (message!="") && 
        (<p className={styleAnm}>{message}</p>)
      
    );



}





export default Alert;
 