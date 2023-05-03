import { Checkbox, FormControlLabel, FormGroup, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { useState } from "react";

export default function FilterTable({ rows, categories }) {
    const [selectedValues, setSelectedValues] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;

        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter((val) => val !== value));
        } else {
            setSelectedValues([...selectedValues, value]);
        }
    };

    const filteredRows = rows.filter((row) => {
        return selectedValues.some((val) => row.category === val);
    });

    return (
        <>
            <FormGroup>
                {categories.map((category) => (
                    <FormControlLabel
                        key={category}
                        control={
                            <Checkbox
                                checked={selectedValues.includes(category)}
                                onChange={handleChange}
                                value={category}
                            />
                        }
                        label={category}
                    />
                ))}
            </FormGroup>

            <Table>
                <TableBody>
                    {filteredRows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell>{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
