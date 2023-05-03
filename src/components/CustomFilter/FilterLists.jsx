import React, { useState } from 'react'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import Checkbox from '../Checkbox/Checkbox';
import useStyles from './styles';
import { usersData } from '../Table/tableData';

// import {checkListName} from './filterListName';

const filtersValues = {
    statusReady:false,
    statusInprogress: false,
    segmentTypeDynamic:false,
    segmentTypeStatic: false,

}
export const FilterLists = (props) => {
    const classes = useStyles();

    const [tableData, setTableData] = useState(usersData);
    const [filters, setFilters] = useState(filtersValues);
    const [dateFilter, setDateFilter] = useState('');
    
    // console.log({ dateFilter})

    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
    };

    // Apply Filters
    const applyFilters = () => {
        console.log("Apply Call")
        let filteredData = tableData;

        if (filters.statusReady) {
            filteredData = filteredData.filter((row) => row.status==='Ready')
        }
        if (filters.statusInprogress) {
            filteredData = filteredData.filter((row) => row.status === 'Inprogress')
        }
        if (filters.segmentTypeDynamic) {
            filteredData = filteredData.filter((row) => row.segmentType === 'Dynamic')
        }
        if (filters.segmentTypeStatic) {
            filteredData = filteredData.filter((row) => row.segmentType === 'Static')
        }
        if (dateFilter) {
            filteredData = filteredData.filter((row) => row.createdDate === dateFilter);
        }
        setTableData(filteredData);
    }
    
    console.log({tableData})

    const clearFilters = () => {
        setFilters(filtersValues);
        setTableData(usersData);
        setDateFilter('')
    }
    return (
        <Paper sx={{ width: '232px',p:2 }} elevation={2}>
            <Box
                className={classes.filterContainer}>
                <Typography variant='sh3'>Filters</Typography>
                <Box sx={{ mt: 2 }}>
                    {/* {
                        tableData.map((item) => (
                                <Box key={item.id} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography>{item.title}</Typography>
                                    {
                                        item.items.map((data) => (
                                            <Checkbox
                                                key={data.id}
                                                label={data.label}
                                                onChange={handleFilterChange}
                                                name={data.name}
                                                value={data.name}
                                                checked={filters[data.name]}
                                            />
                                        ))
                                    }
                                </Box>
                            ))
                        } */}

                    <Box
                        sx={{ display: 'flex',}}
                    >
                        <Typography>Filter By Date</Typography>
                        <input
                            style={{ padding: '8px 12px', cursor: 'pointer', width: 210, borderRadius: '4px' }}
                            type='date'
                            name='createdDate'
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                        />
                        <Typography>Status</Typography>
                        <Checkbox
                            label="Ready"
                            onChange={handleFilterChange}
                            checked={filters.statusReady}
                            name="statusReady"
                        />
                        <Checkbox
                            label="Inprogress"
                            onChange={handleFilterChange}
                            checked={filters.statusInprogress}
                            name="statusInprogress"
                        />
                        <Typography>Segment Type</Typography>
                        <Checkbox
                            label="Dynamic"
                            onChange={handleFilterChange}
                            checked={filters.segmentTypeDynamic}
                            name="segmentTypeDynamic"
                        />
                        <Checkbox
                            label="Static"
                            onChange={handleFilterChange}
                            checked={filters.segmentTypeStatic}
                            name="segmentTypeStatic"
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ p: 1 }}>
                <Divider />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 1,
                }}>
                    <Button
                        variant="text"
                        size="medium"
                        onClick={clearFilters}
                    >Clear All</Button>
                    <Button
                        variant="text"
                        size="medium"
                        onClick={applyFilters}
                    >Apply</Button>
                </Box>
            </Box>
        </Paper>
    )
}

