import React,{useState,useEffect} from "react";
import axios from "axios";



export default function AllStudents(){

    const [students,setStudents] = useState([]);

    useEffect(() =>{
        function getStudents(){
            axios.get("http://localhost:8070/student/").then((res) =>{
                //response eke data array eka withrai api display karanne
                //gatta data tike students kiyanna empty array state ekata set karanne setStudents method eken
                setStudents(res.data);
                console.log(res.data)
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();
    },[])


//pahala student._id eke underscore(_) dala tyene mkkd mongodb eke tyenna table eke id ekta adala table header eka tyenne ehema

    return(
        
        <div>
            <h1>All Students</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{student._id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}