import React,{useState} from "react";
import axios from "axios";

export default function UpdateStudent(){

    const[result,setStudent] = useState(null);
    const[studentId,setStudentId] = useState("");

    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[gender,setGender] = useState("");

    const getStudentDetails = () => {

        axios.get(`http://localhost:8070/student/get/${studentId}`).then((res) =>{
            //display existing student data
            setStudent(res.data.result);

             // Set form fields to initial values when getting new student details
             //setStudent eken apu data tika wen karanawa name , age , gender widihata
            setName(res.data.result.name);
            setAge(res.data.result.age);
            setGender(res.data.result.gender);
        }).catch((err) =>{
            alert("Student not found");
        })
    }

    //update
    const sendData = (e) =>{
        e.preventDefault();

        //new values
        const updatedStudent = {
            name,
            age,
            gender,
        }
        axios.put(`http://localhost:8070/student/update/${studentId}`,updatedStudent).then(() =>{
            alert("Student Updated");
        }).catch((err) =>{
            alert(err);
        })
    }

    return(
    <div>
      <div className="container">
        <label htmlFor="studentId">Enter Student ID: </label>
        <input type="text" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        <button onClick={getStudentDetails}>Display Details</button>
      </div>
    

    {result && (

        <div className="container">
        <form onSubmit={sendData}>
            <div className="mb-3">
                <label for="name" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="name" value={name} placeholder="Enter Student name" required
                onChange={(e) => {

                    setName(e.target.value);
                }}/>
                
            </div>
            <div className="mb-3">
                <label for="age" className="form-label">Student age</label>
                <input type="Number" className="form-control" id="age" value={age} placeholder="Enter Student age" min="1" max="18" required
                onChange={(e) => {

                    setAge(e.target.value);
                }}/>
                
            </div>
            <div className="mb-3">
                <label for="gender" className="form-label">Student gender</label>
                <input type="text" className="form-control" id="gender" value={gender} placeholder="Enter Student gender" required
                onChange={(e) => {

                    setGender(e.target.value);
                }}/>
                
            </div>
            
            <button type="submit" className="btn btn-primary">Update</button>
            </form>
    </div>
    )}
    </div>
    );
}