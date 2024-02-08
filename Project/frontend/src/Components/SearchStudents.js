import React,{useState} from "react";
import axios from "axios";


export default function SearchStudents(){

    const [result,setStudent] = useState(null);
    const [studentId, setStudentId] = useState("");

    const getStudent = () =>{
        axios.get(`http://localhost:8070/student/get/${studentId}`).then((res) =>{
            setStudent(res.data.result);
        }).catch((err) =>{
            alert("Student not found");
        });
    };

    return(
        <div className="container">
            <br></br>
        <div className="container">
            <label htmlFor="studentId">Enter Student ID:</label>
            <input type="text" id="studentId" placeholder="Student ID" value={studentId} onChange={(e) =>setStudentId(e.target.value)}/>
            <button onClick={getStudent}>Submit</button>
        </div>

        <br></br>
    
        {result && (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Attribute</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{result._id}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{result.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{result.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{result.gender}</td>
                    </tr>
                    
                </tbody>
            </table>
        )}
        </div>
    )
}