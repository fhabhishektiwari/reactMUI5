import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, FormControlLabel, Button } from '@mui/material';

const initialValue={
    name:'',
    age:'',
    city:'',
    country:'',
}
const data = [
    { name: 'John', age: 25, city: 'New York', country: 'USA',},
    { name: 'Jane', age: 30, city: 'London', country: 'UK' },
    { name: 'Bob', age: 35, city: 'Paris', country: 'France' },
    { name: 'Bob', age: 36, city: 'London', country: 'France' },
    { name: 'Alice', age: 40, city: 'Tokyo', country: 'Japan' },
    { name: 'David', age: 45, city: 'Sydney', country: 'Australia' },
];


const TableWithFilters = () => {
    const [filters, setFilters] = useState(initialValue);


    const handleFilterChange = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.checked });
    };

    const handleClearFilters = () => {
        setFilters(initialValue);
    };

    const handleApplyFilters = () => {
        
        // Filter the data based on the applied filters
        const filteredData = data.filter((item) =>(item.name===''))

            
            // for (const key in filters) {
            //     if (filters[key] && item[key] !== key) {

            //         return false;
            //     }
            // }
            // return true;
        console.log("asda",filteredData);
        return filteredData;

        // Do something with the filtered data
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.filter((item)=>item.name).map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.country}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <FormControlLabel
                    control={<Checkbox 
                    checked={filters.name} 
                    value={filters.name} 
                    onChange={handleFilterChange} 
                    name="name" />}
                    label="Name_Bob"
                />
                <FormControlLabel
                    control={<Checkbox 
                    checked={filters.age} 
                    onChange={handleFilterChange}
                    name="age"
                    value={filters.age}
                     />}
                    label="Age_35"
                />
                <FormControlLabel
                    control={<Checkbox 
                    checked={filters.city} 
                    onChange={handleFilterChange}
                    value={filters.city}

                    name="city" />}
                    label="City_Paris"
                />
                <FormControlLabel
                    control={<Checkbox 
                    checked={filters.country}
                    value={filters.country}
                    onChange={handleFilterChange} 
                    name="country" />}
                    label="Country_France"
                />
            </div>
            <div>
                <Button variant="contained" onClick={handleClearFilters}>Clear</Button>
                <Button variant="contained" onClick={handleApplyFilters}>Apply</Button>
            </div>
        </>
    );
};

export default TableWithFilters;
