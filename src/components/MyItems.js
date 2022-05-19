
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const MyItems = () => {
     const [user] = useAuthState(auth);
    const [ tasks, setTasks] = useState([]);
  
  
    useEffect(() => {
      const getTasks = async () => {
         const email = user?.email;
        const url = `http://localhost:5000/home?email=${email}`;
          const { data } = await axios.get(url);
          setTasks(data);
      };
      getTasks();
    }, [user]);
  
    const handleDelete = (id) => {
      const proceed = window.confirm("Are You Sure?");
      if (proceed) {
        const url = `http://localhost:5000/home/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((deleteTask) => {
            console.log(deleteTask);
            toast("Delivered One Item!");
            const remaining = tasks.filter((task) => task._id !== id);
            setTasks(remaining);
          });
      }
    };
    return (
        <div className="container my-5">
           
           
        <h5 className="text-center fw-bold text-dark py-2">Your Email: <span className="text-success">{user.email}</span> </h5>
        <h4 className="text-center fw-bold fs-4 text-dark pb-5">Your Task: <span className="text-danger">{tasks.length}</span></h4> 
  
        <div className=" table-responsive">
          <Table
            hover  size="sm" className="text-center"
            striped
   
        
          >
            <thead className="rounded">
              <tr className="rounded">
               
               
                <th>Name</th>
                <th>Description</th>
                <th>Remove</th>
                
              </tr>
            </thead>
  
            {tasks.map((task) => (
              <tbody key={task._id}>
               
              
                <td className="pb-0 pt-3 fw-bold">{task.name}</td>
              
                <td className="pb-0 pt-3 fw-bold">{task.description}</td>
               
  
                <td className="pb-0 fw-bold ">
                  <i
                    onClick={() => handleDelete(task._id)}
                    class="fa-solid fa-trash-can fs-5"
                  ></i>
                </td>
              </tbody>
              
            ))}
          </Table>
        </div>
      </div>
    );
};

export default MyItems;