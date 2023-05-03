import React, { useState } from 'react';

const data = [
    { id: 1, name: 'John', age: 25, city: 'New York',date:'2022-03-05' },
    { id: 2, name: 'Jane', age: 30, city: 'Los Angeles', date: '2020-04-11' },
    { id: 3, name: 'Bob', age: 35, city: 'Chicago', date: '2018-03-18' },
    { id: 4, name: 'Alice', age: 40, city: 'Houston', date: '2010-12-05' },
    { id: 5, name: 'Nia', age: 40, city: 'New York', date: '2020-08-19'},
]
const filtersList = {
    age: false,
    city: false,
}

const FilterTableSix = () => {
    // Define the initial state
    const [tableData, setTableData] = useState(data);
    const [filters, setFilters] = useState(filtersList);
    const [dateFilter, setDateFilter] = useState('');
    console.log({dateFilter})
    // console.log({ tableData })


    // Handle filter changes
    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
    };

    // Apply filters to table data
    const applyFilters = () => {
        let filteredData = tableData;
        if (filters.age) {
            filteredData = filteredData.filter((row) => row.age >= 30);
        }
        if (filters.city) {
            filteredData = filteredData.filter((row) => row.city === 'New York');
        }
        if (dateFilter) {
            filteredData = filteredData.filter((row) => row.date === dateFilter);
            console.log(filteredData)
        }
        setTableData(filteredData);
    };

    // Clear filters and show all data
    const clearFilters = () => {
        setFilters(filtersList);
        setTableData(data);
        setDateFilter('')
    };

    return (
        <div style={{width:'80%',margin:'0 auto'}}>
            <div style={{
                width: '272px',
                height: '107px',
                background: '#cfd6d6',
                padding: '8px 12px',
                margin:'8px 0',
                borderRadius: '4px'
            }}>
                <input
                    type='checkbox'
                    name='age'
                    checked={filters.age}
                    onChange={handleFilterChange}
                />Age 30+

                <input
                    type='checkbox'
                    name='city'
                    checked={filters.city}
                    onChange={handleFilterChange}
                />New York City
                <input
                    style={{ padding: '8px 12px',cursor:'pointer',width:250,borderRadius:'4px' }}
                    type='date'
                    name='data'
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}

                />
                <div>
                    <button onClick={applyFilters}>Apply Filters</button>
                    <button onClick={clearFilters}>Clear Filters</button>
                </div>
            </div>
            
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((row)=>(
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>{row.city}</td>
                                <td>{row.date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
)}

export default FilterTableSix;