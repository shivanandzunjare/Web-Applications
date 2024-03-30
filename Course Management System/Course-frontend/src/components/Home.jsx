import React, { useEffect, useState } from 'react'
import courseService from '../service/courseService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {

  const[courseList, setCourseList] = useState([]);

  useEffect(() =>{
    init();
  },[]);

  const init =() =>{
    courseService.getAllCourse()
      .then((res) => {
        console.log(res.data);
        setCourseList(res.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const deleteCourse=(id) =>{
    courseService.deleteCourse(id)
    .then((res) =>{
      console.log(res.data);
      console.log(" deleted successfully");

      toast.success("del");
      init();

    })
    .catch((error) =>{
      console.log(error);
    })
  }
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header fs-3 text-center'>
                App Course List
              </div>
              <div className='card-body'>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope='col'>Sr. No</th>
                      {/* <th scope='col'>ID </th> */}
                      <th scope='col'>Name</th>
                      <th scope='col'>Category</th>
                      <th scope='col'>fees</th>
                      <th scope='col'>Location</th>
                      <th scope='col'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseList.map((c,num) =>(
                    <tr>
                      <td>{num+1}</td>
                      {/* <td>{c.id}</td> */}
                      <td>{c.name}</td>
                      <td>{c.category}</td>
                      <td>{c.fees}</td>
                      <td>{c.location}</td>
                      <td>
                        <Link to={'edit/' +c.id} className='btn btn-sm btn-primary'> Edit</Link>
                           <button onClick={() =>deleteCourse(c.id)} className='btn btn-sm btn-danger ms-1'> delete</button>
                           
                      </td>
                   </tr>
                       ))}
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