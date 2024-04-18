import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import API from "../Api/Api"
import { toast } from 'react-toastify';


function AddProduct() {

  const {
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = (event) =>{
    console.log(event);

    axios
    .post(API.URL + "/addProduct", event)
    .then((result) => {
      console.log(result.data);
      toast.success("added")
      
    })
    .catch((error) => {
      console.log(error);
      toast.error("error")

    });

  };
  return (
    <div className='container mt-5 '>
      <div className='row' >
        <div className='col-lg px-4' >
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className='row'>
               <div className='col-xl-3'>
                 <label>Enter product name</label>
                 <input type='text' name='productname'
                 className='form-control' placeholder='Product Name' 
                 {...register("productname", {required : true})}
                  ></input>

                </div>
            </div>
            <div className='row'>
               <div className='col-xl-3'>
                 <label>Enter quantity</label>
                 <input type='text' name='quantity'
                 className='form-control' placeholder='quantity'  
                 {...register("quantity", {required : true})}></input>

                </div>
            </div>

            <div className='row'>
               <div className='col-xl-3'>
                 <label>enter price</label>
                 <input type='text' name='price'
                 className='form-control' placeholder='price' 
                 {...register("price", {required : true})} ></input>

                </div>
            </div>

            
               <div className='col-xl-3'>
                 <label>Enter description</label>
                 <input type='text' name='description'
                 className='form-control' placeholder='description'  
                 {...register("description", {required : true})}></input>

                </div>

                <button className='btn btn-btn btn-success' type='submit'>
                  submit
                </button>
      
          </form>

        </div>
      </div> 

    </div>
  )
}

export default AddProduct