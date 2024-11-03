import React from 'react'
import './Members.css'
import DataTable from './DataTable'
function Members() {
    return (

        <div >
            <div className="list-header">
                <h3>Members</h3>
                <select>
                    <option value="member">Member Name</option>
                    <option value="country">Country</option>
                    <option value="status">Availability Status</option>
                </select>
            </div>
            <div className="list">
                <div className="list_container">
                    <DataTable />
                </div>
            </div>
        </div>
    )
}

export default Members