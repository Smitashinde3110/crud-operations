import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { showStudents } from "../Actions/StudentAction";
import { Button } from "@material-ui/core";

export const ShowStudent = () => {

    let studAr = useSelector((store) => store.StudentReducer)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(showStudents());
    }, 1000);


    return (
        <div >
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Year</th>
                        <th scope="col">Action</th>
                    </tr>
                 </thead>
                 {
                    studAr.map((student) => {

                        return (

                            <tbody >
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.department}</td>
                                    <td>{student.year}</td>
                                    <td>
                                        <NavLink to={`/student/update/${student.id}`}><Button  variant="contained" color="primary"style={{marginRight:10}}>Update</Button></NavLink>
                                        <NavLink to={`/students/delete/${student.id}`}><Button variant="contained" color="secondary"style={{marginRight:10}} >delete</Button></NavLink>
                                    </td>
                                </tr>
                            </tbody>  
                        );
                    })
                            
}
            </table>
        </div>
    )
}