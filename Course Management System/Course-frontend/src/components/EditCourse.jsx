
import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import courseService from '../service/courseService';

const EditCourse = () => {

  const [course, setCourse] = useState({
    name: "",
    category: "",
    fees: "",
    location: "",
  });

  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  useEffect(() =>{
    courseService
    .getCourseById(id)
    .then((res) =>{
      setCourse(res.data);
    })
    .catch((error) =>{
      console.log(error);
    });
  },[]);

  // const [msg, setMsg] = useState("");
  //event passed ==>e
  const handleChange = (e) => {
    const value = e.target.value;  //fetch event value
    setCourse({ ...course, [e.target.name]: value }); //set value as indiviual parameter
  };

  const CourseUpdate = (e) => {
    e.preventDefault();

    courseService
      .editCourse(course)
      .then((res) => {
        navigate("/")
        console.log(" Course updated Successfully");
        alert(" done");
        //setMsg(" Course added Successfully");
        setCourse({
          name: "",
          category: "",
          fees: "",
          location: "",
        });
      })
      .catch((error) => {
        console.log(error)
      })

  };
  return (
    <div>
      <div>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <div className='card'>
                <div className='card-header fs-3 text-center'>
                  Edit Course
                </div>
                <div className='card-body'>
                  <form onSubmit={(e) => CourseUpdate(e)}>
                    <div className='mb-3'>
                      <label> Enter the course Name </label>
                      <input type='text' name="name"
                        className='form-control' placeholder='Course Name'
                        onChange={(e) => handleChange(e)}
                        value={course.name} ></input>
                    </div>

                    <div className='mb-3'>
                      <label> Enter the course Category </label>
                      <input type='text' name="category"
                        className='form-control' placeholder='category'
                        onChange={(e) => handleChange(e)}
                        value={course.category}></input>
                    </div>



                    <div className='mb-3'>
                      <label> Enter the course fees </label>
                      <input type='text' name="fees"
                        className='form-control' placeholder=' fees'
                        onChange={(e) => handleChange(e)}
                        value={course.fees} ></input>
                    </div>

                    <div className='mb-3'>
                      <label> Enter the course loaction </label>
                      <input type='text' name="location"
                        className='form-control' placeholder=' Location '
                        onChange={(e) => handleChange(e)}
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
    </div>
  )
}

export default EditCourse