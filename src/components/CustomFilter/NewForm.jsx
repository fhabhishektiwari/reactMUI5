import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const MyForm = () => {
    const [checkedState, setCheckedState] = useState({
        isReady: false,
        isInprogress: false,
        isDynamic: false,
        isStatic: false,
        isArchived: false,
        isUnArchived: false,
    });

    console.log({checkedState})
    const handleCheckboxChange = (event) => {
        setCheckedState({
            ...checkedState,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedState.isReady}
                        onChange={handleCheckboxChange}
                        name="isReady"
                    />
                }
                label="Ready"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedState.isInprogress}
                        onChange={handleCheckboxChange}
                        name="isInprogress"
                    />
                }
                label="Inprogress"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedState.isDynamic}
                        onChange={handleCheckboxChange}
                        name="isDynamic"
                    />
                }
                label="Dynamic"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedState.isStatic}
                        onChange={handleCheckboxChange}
                        name="isStatic"
                    />
                }
                label="Static"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedState.isArchived}
                        onChange={handleCheckboxChange}
                        name="isArchived"
                    />
                }
                label="Archived"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedState.isUnArchived}
                        onChange={handleCheckboxChange}
                        name="isUnArchived"
                    />
                }
                label="Unarchived"
            />
        </div>
    );
};

export default MyForm;
