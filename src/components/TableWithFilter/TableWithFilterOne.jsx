import { useState } from "react";
import { Checkbox, FormControlLabel, Button } from "@mui/material";

export const TableWithFilterOne = ({ data, filterOptions }) => {
    const [filteredData, setFilteredData] = useState(data);
    const [filters, setFilters] = useState({});
    // console.log(filteredData)

    const handleFilterChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.checked,
        });
    };

    const handleClearFilters = () => {
        setFilters({});
    };

    const handleApplyFilters = () => {
        const filteredData = data.filter((item) => {
            return Object.keys(filters).every((key) => {
                if (!filters[key]) return true;
                return item[key] === filters[key];
            });
        });
        // setFilteredData(filteredData);
        console.log("filterdata",filteredData)
    };

    return (
        <>
            <div>
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
            </div>
            <Button variant="outlined" onClick={handleClearFilters}>
                Clear
            </Button>
            <Button variant="contained" onClick={handleApplyFilters}>
                Apply
            </Button>
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            {Object.keys(item).map((key) => (
                                <td key={key}>{item[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
