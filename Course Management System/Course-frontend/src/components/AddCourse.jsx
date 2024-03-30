import React, { useState } from 'react'
import { toast } from 'react-toastify';
import courseService from '../service/courseService';

const AddCourse = () => {

  const [ course, setCourse]= useState({
    name:"",
    category:"",
    fees:"",
    location:"",
  });

 // const [msg, setMsg] = useState("");
                     //event passed ==>e
  const handleChange=(e)=>{
    const value=e.target.value;  //fetch event value
    setCourse({ ...course, [e.target.name] : value}); //set value as indiviual parameter
  };

  const CourseRegister =(e) =>{
    e.preventDefault();
    
    courseService
    .saveCourse(course)
    .then((res) =>{
      console.log(res.data);
      console.log(" Course added Successfully");
      toast.success(" Course added Successfully",{
        position:'top-center',
        autoClose:1000,
      });
      
      setCourse({
        name:"",
        category:"",
        fees:"",
        location:"",
      });
      toast.success(" Course added Successfully",{
        position:'top-center',
        autoClose:1000,
      });
    })
    .catch((error) =>{
      console.log(error)
    })

  };

  return (
    <div>
       <div className='container mt-3'>
         <div className='row'>
           <div className='col-md-6 offset-md-3'>
             <div className='card'>
                <div className='card-header fs-3 text-center'>
                      Add Course 
                </div>
                 <div className='card-body'>
                    <form onSubmit={(e)=> CourseRegister(e)}>
                        <div className='mb-3'>
                          <label> Enter the course Name </label>
                          <input  type='text' name="name"
                           className='form-control' placeholder='Course Name'
                           onChange={ (e) =>handleChange(e)} 
                           value={course.name} ></input>  
                        </div>

                        <div className='mb-3'>
                          <label> Enter the course Category </label>
                          <input  type='text' name="category"
                           className='form-control' placeholder='category' 
                           onChange={ (e) =>handleChange(e)} 
                           value={course.category}></input>
                        </div>

                

                        <div className='mb-3'>
                          <label> Enter the course fees </label>
                          <input  type='text' name="fees"
                           className='form-control' placeholder=' fees' 
                           onChange={ (e) =>handleChange(e)} 
                           value={course.fees} ></input>
                        </div>

                        <div className='mb-3'>
                          <label> Enter the course loaction </label>
                          <input  type='text' name="location"
                           className='form-control' placeholder=' Location ' 
                           onChange={ (e) =>handleChange(e)} 
                           value={course.location}></input>
                        </div>
                        <button className='btn btn-primary col-md-12'> Submit</button>
                    </form>
                 
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default AddCourse