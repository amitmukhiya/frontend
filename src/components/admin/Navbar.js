import { Link } from "react-router-dom";
import React from "react";
import Task from "../utils/Task";
import Form from "../utils/Form";
import Popup from 'reactjs-popup';
import './Pop.css';
import { useState } from "react";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(1);
  // const [task, setTask] = useState(false);
  const name="Admin"
  const temp=name==="Admin"?"Add Employee":"Add Task"
 
  return (
    <div>

      <nav className="navbar navbar-light bg-dark justify-content-between px-4">
      <button className="btn bg-white" onClick={() => {
          setCount(count + 1);
          if (count % 2 === 1) {
            setModalOpen(true);
          } else {
            setModalOpen(false);
          }
        }}>{temp}</button>
        <div>
        <button className="btn bg-white my-2 my-sm-0 mx-2" type="submit">{name}</button>
        <button className="btn bg-white my-2 my-sm-0" type="submit">Logout</button>
        </div>
      </nav>
      {modalOpen &&temp==="Add Employee"&& <div className="modalBackground">
        <div className="modalContainer">
          <div className="body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {modalOpen && <Form setOpenModal={setModalOpen} />}
          </div>
        </div>
      </div>}
      {modalOpen &&temp==="Add Task"&& <div className="modalBackground">
        <div className="modalContainer">
          <div className="body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {modalOpen && <Task setOpenModal={setModalOpen} />}
          </div>
        </div>
      </div>}
    </div>
  );
}

