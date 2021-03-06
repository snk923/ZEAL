import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

function Homescreen() {
  const [projects, setProjects] = useState([])
  const [users, setUsers] = useState([])
  //dependent array line 9...empty array
  useEffect(() => {
    const projectsFromStorage = localStorage.getItem("projectList")
    console.log(projectsFromStorage)
    if (projectsFromStorage) {
      setProjects(JSON.parse(projectsFromStorage))
    }
  }, [])

  useEffect(() => {
    const usersFromStorage = localStorage.getItem("zealLoggedIn")
    console.log(usersFromStorage)
    if (usersFromStorage) {
      setUsers(JSON.parse(usersFromStorage))
    }
  }, [])




  return (
    <div>
      <section className="d-flex flex-column align-items-center justify-content-center title" >
        <h1>Welcome Back  <span id="zeal"> {users.username}</span>!</h1>
        <h4>Track your assignments and tasks below.</h4>

        <div className="row container ">


        <div >
        <i className="fas fa-plus"></i>
        <i className="bi bi-plus"></i>

        <Link to="/create" className="btn btn-block p-3 my-2 btn-secondary" id="addProject">
        <span className="plus">&#43; </span>
        <h3>Add Assignment</h3>
        </Link>
        </div>
      {projects.map((project, i) => {
        return (
          <div className="row container" key = {i}>
        <Card style={{ width: '100rem' }}>
        <Card.Header className="d-flex flex-column align-items-center justify-content-center projectTitle">{project.name}</Card.Header>
      <br></br>
        <Card.Text className="d-flex flex-column align-items-center justify-content-center">
       {project.description}
        </Card.Text>
        <Card.Text className="d-flex flex-column align-items-center justify-content-center">
     Due Date: {project.dueDate}
      </Card.Text>
      Project Tasks:
          {project.assignedTask.map((sub)=>
            <li style={{ color: sub.priority === "high" ? "red" : sub.priority === "medium" ? "orange" : "green" }} key={i}><span style={{color: 'black'}}>{sub.teamMember}:</span>  {sub.task}</li>
         )}
         {/* <button onClick={deleteItem}>Delete this card</button> */}
        </Card>
      </div>
        )},
      )},
        </div>
        </section>
  </div>
  )}

export default Homescreen;
