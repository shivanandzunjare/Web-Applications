import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API from '../Api/Api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditProduct() {
    
    const navigate = useNavigate();

    const [ product, setProduct] = useState({
        productname:"",
        quantity:"",
        price:"",
        description:"",
    })

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        axios
        .get(API.URL + "/getById/" + id)
        .then((result) => {
            console.log(result.data);
            setProduct(result.data);
            
        })
        .catch((err) => {
            console.log(err);

        })
    },[])

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({...product, [e.target.name]: value})
    }

    const productUpdate = (e) => {
        e.preventDefault();

        axios
        .put(API.URL + "/update", product)
        .then((result) => {
            console.log(result.data);
            console.log("updated");

            setProduct({
                productname:"",
                quantity:"",
                price:"",
                description:"",
            })
            toast.success("updated")

            navigate("/home")
        })
        .catch((err) => {
            console.log(err);

        })
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 offset-md-3'>
                <div className='card mt-5'>
                    <div className='card-body'>
                        <form onSubmit={(e) => productUpdate(e)}>
                            <div className='mb-3'>
                                <label>Product Name</label>
                                <input type='text' name='productname'
                                className='form-control' 
                                onChange={(e) => handleChange(e)}
                                value={product.productname} >

                                </input>

                            </div>

                            <div className='mb-3'>
                                <label>Product Name</label>
                                <input type='text' name='quantity'
                                className='form-control' 
                                onChange={(e) => handleChange(e)}
                                value={product.quantity} >

                                </input>

                            </div>

                            <div className='mb-3'>
                                <label>Product Name</label>
                                <input type='text' name='price'
                                className='form-control' 
                                onChange={(e) => handleChange(e)}
                                value={product.price}>

                                </input>

                            </div>

                            <div className='mb-3'>
                                <label>Product Name</label>
                                <input type='text' name='description'
                                className='form-control' 
                                onChange={(e) => handleChange(e)}
                                value={product.description}>

                                </input>

                            </div>

                            <button className='btn btn-btn btn-success' type='submit'>
                                Submit
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default EditProduct