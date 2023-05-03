import { useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";

const data = [
    { id: 1, name: "John", age: 30, gender: "Male",isPassed:true},
    { id: 2, name: "Jane", age: 25, gender: "Female",isPassed:false},
    { id: 3, name: "Bob", age: 35, gender: "Male",isPassed:true},
    { id: 4, name: "Nia", age: 25, gender: "Female", isPassed: false },
    { id: 5, name: "Lema", age: 35, gender: "Male", isPassed: true },
];

const filterOptions = [
    // { name: "name", label: "Name" },
    // { name: "age", label: "Age" },
    // { name: "gender", label: "Gender" },
    { name: "passed", label: "Passed" },
    { name: "failed", label: "Failed" },
];

function FilteredTable() {
    const [filters, setFilters] = useState({});
    
    console.log("filters",filters)

    const [filteredData, setFilteredData] = useState(data);

    const handleFilterChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.checked,
        });
    };

    const filterData = () => {
        // const filteredData = data.filter((item) => {
        //     console.log(item.isPassed)
        //     // if (filters.name && item.isPassed ===true) {
        //     //     // return true;
        //     //     console.log("name",item.is)
        //     // }
        //     // return Object.keys(filters).every((key) => {
        //     //     if (!filters[key]) return true;
        //     //     return item[key] === filters[key];
        //     // });
        // });

        // console.log("filters",filters.name)
        const filteredData = data.filter((item) => {
            // console.log("filterdate",filters.name)
            if (filters.name && item.name) {
                return true;
            }
            return Object.keys(filters).every((key) => {
                if (!filters[key]) return true;
                return item[key] === filters[key];
            });
        });
        console.log("filterdData",filteredData)
        setFilteredData(filteredData);
    };

    const clearFilters = () => {
        setFilters({});
        setFilteredData(data);
    };

    return (
        <Box sx={{ p: 2 }}>
            <FormControl component="fieldset">
                {filterOptions.map((option) => (
                    <FormControlLabel
                        key={option.name}
                        control={
                            <Checkbox
                                checked={filters[option.name] || false}
                                onChange={handleFilterChange}
                                name={option.name}
                            />
                        }
                        label={option.label}
                    />
                ))}
            </FormControl>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" onClick={filterData}>
                    Apply
                </Button>
                <Button variant="contained" onClick={clearFilters}>
                    Clear
                </Button>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{item.gender}</TableCell>
                                <TableCell>{item.isPassed===true?'Passed':'Failed'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
}

export default FilteredTable;
