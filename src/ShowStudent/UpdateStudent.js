import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"
import { showStudents, updateStudents } from "../Actions/StudentAction";
import Student from "../StudentData/Student";
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";



const usestyle=makeStyles({
    container:{
      width:'50%',
      margin:'5% 0 0 25%',
      '&>*':{
        marginTop:20
      }
    }
  })
export let UpdateStudent = () => {
    const classes=usestyle();
    let { id } = useParams();
    let [flag, setFlag] = useState(false);

    const [student, setStudent] = useState(new Student());

    const setDetail = (e) => {
        e.preventDefault();
        setStudent({ ...studentfound, [e.target.name]: e.target.value });
    }

    const test = (e) => {
        e.preventDefault();
        console.log(student);
        dispatch(updateStudents(student));
        setFlag(true);

    }
    let studAr = useSelector((store) => store.StudentReducer)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(showStudents())
        setStudent(studentfound);
    }, 1000);

    let ii = parseInt(id);
    let searchStud = (i) => {
        return studAr.find((student) => student.id === i)
    }
    let studentfound = searchStud(ii);
    return (
        <>
      

<div>
         {
             flag==false?
             <FormGroup className={classes.container}>
             <Typography variant="h4">Add Student</Typography>
             <FormControl>
               <InputLabel>Id</InputLabel>
               <Input  name='id' value={student.id}  onChange={setDetail}/>
             </FormControl>
             <FormControl>
               <InputLabel>Name</InputLabel>
               <Input  name='name' value={student.name} onChange={setDetail} />
             </FormControl>
       
             <FormControl>
               <InputLabel>Department</InputLabel>
               <Input     name='department' value={student.department} onChange={setDetail} />
             </FormControl>
       
         
             <FormControl>
               <InputLabel>Year</InputLabel>
               <Input    name='year' value={student.year} onChange={setDetail}/>
             </FormControl>
             <Button variant="contained" onClick={test}  color="primary">Submit</Button>
       
       
           </FormGroup>: <Navigate to="/student/showall" />

         }
     </div>






        </>
    )
}