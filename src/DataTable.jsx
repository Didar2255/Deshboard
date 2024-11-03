import React from 'react'
import './DataTable.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DataTable = () => {
    const rows = [
        {
            id: 101,
            memberName: "Michael Doe",
            img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Canada",
            jobTitle: "9 May",
            teams: 605,
            availabilityStatus: "Available",
        },
        {
            id: 102,
            memberName: "John Smith",
            img: "https://plus.unsplash.com/premium_photo-1675129779554-dc86569708c8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Afghanistan",
            jobTitle: " 2 August",
            teams: 985,
            availabilityStatus: "Available",
        },
        {
            id: 133,
            memberName: "Jane Smith",
            img: "https://plus.unsplash.com/premium_photo-1690295364571-d2d06159e0a7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Belarus",
            jobTitle: "23 Feb",
            teams: 145,
            availabilityStatus: "Unavailable",
        },
        {
            id: 114,
            memberName: "Harold Carol",
            img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Niger",
            jobTitle: "1 March",
            teams: 159,
            availabilityStatus: "Available",
        },
        {
            id: 155,
            memberName: "Jobayed",
            img: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Pakistan",
            jobTitle: "10 Jun",
            teams: 132,
            availabilityStatus: "Unavailable",
        },
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className='data-text'>
                <TableHead>
                    <TableRow className='table-header'>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Member Name</TableCell>
                        <TableCell className="tableCell">Country</TableCell>
                        <TableCell className="tableCell">Job Title</TableCell>
                        <TableCell className="tableCell">Teams</TableCell>
                        <TableCell className="tableCell">Availability Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='table-body'>
                    {rows.map((row) => (
                        <TableRow key={row.id} className='table-row'>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.memberName}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.country}</TableCell>
                            <TableCell className="tableCell">{row.jobTitle}</TableCell>
                            <TableCell className="tableCell">{row.teams}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`availabilityStatus ${row.availabilityStatus}`}>{row.availabilityStatus}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;