import axios from "axios";

const API_URL ="http://localhost:8080/api";

class CourseService{

    saveCourse(course){
        return axios.post(API_URL+"/add",course);
    }

    getAllCourse(){
        return axios.get(API_URL +"/getlist")
    }
    deleteCourse(id){
        return axios.get(API_URL+"/del/"+id);
    }

    editCourse(course){
        return axios.put(API_URL+"/update",course);
    }
    getCourseById(id){
        return axios.get(API_URL+"/get/"+id);
    }
   
}

export default new CourseService;