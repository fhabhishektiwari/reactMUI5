import React from 'react'

const data = [
    { id: 1, name: 'Ram', age: 22 },
    { id: 2, name: 'Shyam', age: 30 },
    { id: 3, name: 'Sonu', age: 22 },
    { id: 4, name: 'Monu', age: 21 },
    { id: 5, name: 'Nishu', age: 20 },
]

const filterDataByAge=data.filter((item)=>item.age>20);

const filterDataByName=data.filter((item)=>item.name==='Shyam');

const filterDataById=data.filter((item)=>item.id===4);


const TableFilterFive = () => {
    return (
        <table>
            
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
            {
                    filterDataById.map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default TableFilterFive
