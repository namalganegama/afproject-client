import React, {useState, useEffect} from 'react'
import axios from 'axios';



export default function GetOne(){
    


    const [Items, setItems] = useState([]);

    useEffect(( )=> {
        function getItems() {
            axios.get('https://afproject-panelmember.herokuapp.com/api/store/get/')
            .then((res) => {
                console.log(res.data);
                setItems(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getItems();
    }, [])

     return(
        <div >
            <h3>All Items </h3><br/><br/>
            {Items.map((item)=>{
                return(
                    <div key={item._id} className="container" >
                         <b> Item Code:</b> {item.code}
                         <br/>
                         <b>Item Name: </b> {item.name}
                         <br/>
                         <b>Item Category: </b>{item.category}
                         <br/>
                         <b>Item Quentity:</b>{item.quentity}
                         <br/>
                         <b>Item Type: </b>{item.type}
                         <br/>
                         <b>Item Price: </b>{item.price}
                         <br/>
                       
                        <hr/>
                     </div>
                    
                )
            })}
                        
        </div>

     )
        }
    
                     
    
                     
                     
                    
        
