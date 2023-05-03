import { Box, Button, Divider, IconButton, Paper, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
// import FilterUI from '../CustomFilter/FilterUI'
import useTable from '../Table/useTable';

import { headCells, usersData } from '../Table/tableData';
// import { makeStyles } from '@mui/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import { StyledMenu } from '../CustomFilter/styles';
import useStyles from '../CustomFilter/styles';
import Checkbox from '../Checkbox/Checkbox';
import { checkListName } from '../CustomFilter/filterListName';

console.log(checkListName);
const TableWithFiltersUI = () => {
    
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const classes = useStyles();

    const [tableData, setTableData] = useState(usersData);
    const [filters, setFilters] = useState({
        statusReady: false,
        statusInprogress: false,
        segmentTypeDynamic: false,
        segmentTypeStatic: false,
    });
    const [dateFilter, setDateFilter] = useState('');
    const [searchFilter, setSerachFilter] = useState('');


    const [anchorEl, setAnchorEl] = React.useState(null);

    const { TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting } = useTable(usersData, headCells, filterFn);


    // console.log({ filters })

    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
    };

    // console.log({ filters })

    // Apply Filters
    const applyFilters = () => {
        let filteredData = usersData;
        if (filters.statusReady) {
            filteredData = filteredData.filter((row) => row.status === 'Ready')
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
        if (searchFilter){
            // console.log("asasdasdadda");
            filteredData=filteredData.filter((row)=>row.segmentTitle===searchFilter.trim());
        }
        setTableData(filteredData);
        setAnchorEl(null)
    }
    // console.log({ tableData })

    const clearFilters = () => {
        setFilters({
            statusReady: false,
            statusInprogress: false,
            segmentTypeDynamic: false,
            segmentTypeStatic: false,
        });
        setTableData(usersData);
        setDateFilter('')
        setSerachFilter('')
    }

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const tableWithData = tableData.map((user) => (
            <TableRow key={user.id}>
                <TableCell>{user.segmentTitle}</TableCell>
                <TableCell>{user.segmentType}</TableCell>
                <TableCell>{user.totleIntractions}</TableCell>
                <TableCell>{user.totleCustomers}</TableCell>
                <TableCell>{user.createdDate}</TableCell>
                <TableCell>{user.status}</TableCell>
                </TableRow>
    ))
  return (
      <Paper sx={{ width: '50%', m: '0 auto' }}>
          <Toolbar>
              <IconButton
                  className={classes.actionButton}
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  disableRipple
                  onClick={handleClick}
                  sx={{ width: '32px', height: '32px' }}
              >
                  {/* <Typography className='fh-icon fh-icon-filter' />
                 */}
                  <FilterListIcon />
              </IconButton>
              <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
              >
                  {/* filter should come here */}
                  <Paper sx={{ width: '232px',pl:2 }} elevation={2}>
                      <Box
                          className={classes.filterContainer}>
                          <Typography variant='sh3'>Filters</Typography>
                          <Box sx={{ mt: 2 }}>
                              <Box
                                  sx={{ display: 'flex', flexDirection: 'column' }}
                              >
                                  <Typography>Search By Segment Title</Typography>
                                  <input
                                      style={{ padding: '8px 12px', cursor: 'pointer', width: 210, borderRadius: '4px' }}
                                      type='search'
                                      name='searchBySegmentTitle'
                                      value={searchFilter}
                                      onChange={(e) => setSerachFilter(e.target.value)}
                                  />
                                  <Typography>Filter By Date</Typography>
                                  <input
                                      style={{ padding: '8px 12px', cursor: 'pointer', width: 210, borderRadius: '4px' }}
                                      type='date'
                                      name='createdDate'
                                      value={dateFilter}
                                      onChange={(e) => setDateFilter(e.target.value)}
                                  />
                                          <Box sx={{ display: 'flex', flexDirection: 'column',mt:1 }}>
                                          {
                                            checkListName.map((item)=>(
                                                <Box key={item.id} sx={{display:'flex',flexDirection:'column'}}>
                                                    <Typography>{item.title}</Typography>
                                                    {
                                                        item.children.map((ch)=>(
                                                            <Checkbox
                                                                key={ch.id}
                                                                label={ch.label}
                                                                onChange={handleFilterChange}
                                                                name={ch.name}
                                                                value
                                                                checked={filters[ch.name]}
                                                            />
                                                        ))
                                                    }
                                                </Box>
                                            ))
                                          }
                                          </Box>
                                  
                                  {/* <Typography>Status</Typography>
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
                                  /> */}
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
              </StyledMenu>
          </Toolbar>
          <TblContainer>
              <TblHead variant="sh5" />
              <TableBody>
                  {tableWithData}
              </TableBody>
          </TblContainer>
          <TblPagination />
      </Paper>
  )
}

export default TableWithFiltersUI
