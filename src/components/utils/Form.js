import React from 'react'

export default function Form({setOpenModal}) {
    return (
        <>
            <div style={{ border: '2px solid red', margin: '30px 30px', padding: '20px', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px' }}>
                <form style={{ width: '400px' }}>
                    <h2>Add Employee</h2>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Full Name"
                        />

                    </div>
                    {/* department */}
                    <div className="form-group">
                        <label htmlFor="department">Select Department</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Finance</option>
                            <option>Tech</option>
                            <option>Hr</option>
                            <option>Research</option>
                            <option>Others</option>
                        </select>

                    </div>
                    {/* email */}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="contact"
                            placeholder="Enter Contact Number"
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Joining Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            placeholder="Enter Joining Date"
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <button type="submit" className="btn btn-primary my-2">
                            Add
                        </button>
                        <button type="submit" className="btn btn-primary my-2"onClick={()=>{
                            setOpenModal(false)
                        }}>
                            Cancel
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}
