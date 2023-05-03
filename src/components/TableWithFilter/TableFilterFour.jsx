
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box, Typography } from '@mui/material';
import Checkbox from '../Checkbox/Checkbox';

const data = [
    { id: 1, name: 'John', age: 25,address:'a'},
    { id: 2, name: 'Jane', age: 40,address:'b'},
    { id: 3, name: 'Bob', age: 40,address:'c'},
    { id: 4, name: 'Nia', age: 60,address:'d'},
];

const columns = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'address', label: 'Address' },
];

const filtersName=[
    { id: 'filterByAge', name:'filterByAge',title:'filter by Age'},
    { id: 'filterById', name: 'filterById', title: 'filter by Id' },
]


const FilterableTable = () => {
    const [tableData, setTableData] = useState(data);
    const [filters,setFilters]=useState({filterByAge:false,filterById:false});


    const handleApplyFilter = () => {
        let filteredData = data;
        if (filters.filterByAge) {
            filteredData = data.filter(item => item.age > 30);
        }
        if (filters.filterById) {
            filteredData = data.filter(item => item.id === 2); // Change this condition to match your ID filter
        }
        setTableData(filteredData);
    };

    const handleCheckboxChange = (event) => {
        // setFilterByAge(event.target.checked);
        const { name, checked } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
    };

    const handleClearFilter=()=>{
        setFilters({ filterByAge: false, filterById: false })
        setTableData(data)
    }

    return (
        <>
            <div>
                <Box sx={{border:'1px solid red',display:'inline-flex',flexDirection:'column',height:'150px'}}>
                {
                    filtersName.map((item)=>(
                        <Box key={item.id}>
                        <Typography >{item.title}</Typography>
                        <Checkbox
                            checked={filters[item.name]}
                            name={item.name}
                            label={item.name}
                            onChange={handleCheckboxChange}
                        />
                        </Box>
                    ))
                    
                }
                </Box>

                {/* <Checkbox
                    checked={filters.filterByAge}
                    onChange={handleCheckboxChange}
                    inputProps={{ 'aria-label': 'filter by age' }}
                    name="filterByAge"
                />
                By Age +30
                <Checkbox
                    checked={filters.filterById}
                    onChange={handleCheckboxChange}
                    inputProps={{ 'aria-label': 'filter by ID' }}
                    name="filterById"
                /> 
                Filter by Age id==2*/}
                <Box sx={{display:'flex',justifyContent:'flex-start'}}>
                    <Button variant="contained" onClick={handleApplyFilter} sx={{mr:2}}>Apply Filter</Button>
                    <Button variant="contained" onClick={handleClearFilter}>Clear All</Button>
                </Box>
            </div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>{column.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.age}</TableCell>
                                <TableCell>{row.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default FilterableTable;
