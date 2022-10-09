import React from 'react'

export default function Task(setOpenModal) {
    return (
        <>
            <div style={{ border: '2px solid red', margin: '20px 40px', padding: '20px', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px' }}>
                <form style={{ width: '400px' }}>
                    <h2>Add Task</h2>
                    <div class="form-group my-1 py-1">
                        <label for="exampleFormControlTextarea1">Task Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    
                    <div className="form-group my-1 py-1">
                        <label>Task Type </label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Break</option>
                            <option>Meeting</option>
                            <option>Work</option>
                        </select>

                    </div>
                    {/* email */}
                    <div className="form-group my-1 py-1">
                        <label htmlFor="exampleInputEmail1">Start Time</label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group my-1 py-1">
                        <label htmlFor="contact">Time taken to complete the task in minutes</label>
                        <input
                            type="number"
                            min="1"
                            className="form-control"
                            id="dateTime"
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
