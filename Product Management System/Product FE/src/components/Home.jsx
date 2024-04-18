import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import API from "../Api/Api";

function Home() {

  const [data, setData] = useState([]);

  function deleteProduct(id){
    axios
    .delete(API.URL + "/del/" + id )
    .then((result) => {
      console.log(result.data);
      toast.success(" deleted",{
        position: 'top-center',
        autoClose:1000,
      });
      setTimeout(() =>{
        window.location.reload();

      }, 1000);

    })
    .catch((error) =>{
      console.log(error);
      toast.error("error")
    })

  }

  useEffect(() => {
    axios
    .get(API.URL +"/getList")
    .then((result) => {
       console.log(result);
       console.log(result.data);
       setData(result.data)
       toast.success("All product Are Here"  , {
          position:'top-center',
          autoClose:2000,
      })
  
      
    })
    .catch((err) => {
      console.log(err);
      toast.error("error")
    })

  },[])

  
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header fs-3 text-center'>
              Product List
            </div>
            <div className='card-body'>
              <table className=' table table-striped table-bordered'>
                <thead>
                  <tr>
                    <th scope='col'>Sr. No</th>
                    
                     <th scope='col'>Product Name</th>
                      <th  scope='col'>Quantity</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((obj,num) =>{
                    return(
                      <tr>
                           <td>{num+1}</td>
                            <td>{obj.productname}</td>
                             <td>{obj.quantity}</td>
                              <td>{obj.price}</td>
                             <td>{obj.description}</td>
                             <td>
                              <Link className='btn btn-sm btn-primary'
                                 to={"/update/" + obj.id} >
                                   Edit
                              </Link>
                             </td>
                             <td>
                               <Link className='btn btn-sm btn-danger'
                                   onClick={() => deleteProduct(obj.id)}
                                  >
                                 Delete
                               </Link>
                             </td>
                              
                      </tr>
                    )
                    })}
                  
                     
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Home