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
            id: 1,
            memberName: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            country: "John Smith",
            jobTitle: "1 March",
            teams: 785,
            availabilityStatus: "Available",
        },
        {
            id: 2,
            memberName: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            country: "John Smith",
            jobTitle: "1 March",
            teams: 785,
            availabilityStatus: "Available",
        },
        {
            id: 3,
            memberName: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            country: "John Smith",
            jobTitle: "1 March",
            teams: 785,
            availabilityStatus: "Unavailable",
        },
        {
            id: 4,
            memberName: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            country: "John Smith",
            jobTitle: "1 March",
            teams: 785,
            availabilityStatus: "Available",
        },
        {
            id: 5,
            memberName: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            country: "John Smith",
            jobTitle: "1 March",
            teams: 785,
            availabilityStatus: "Unavailable",
        },
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
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