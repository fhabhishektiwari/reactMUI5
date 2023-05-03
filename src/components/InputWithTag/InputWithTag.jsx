import { useState } from "react";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { Box, Divider } from "@mui/material";

export default function DeletableTagsTextField(props) {
    const { tags, onTagsChange, deletable, height, placeholder } = props;
    const [inputValue, setInputValue] = useState("");

    const handleDelete = (tagId) => {
        const newTags = tags.filter(tag => tag.id !== tagId);
        onTagsChange(newTags);
    };

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            const newTag = { id: Date.now(), name: inputValue.trim() };
            if (!tags.some(tag => tag.name === newTag.name)) {
                const newTags = [...tags, newTag];
                onTagsChange(newTags);
                setInputValue("");
            }
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <Box sx={{ border: '1px solid #5e5e5e', display: 'flex', flexFlow: 'column', height: height, borderRadius: '6px' }}>
            <Box sx={{ height: '110px', overflow: 'auto', p: 1 }}>
                {tags.map((tag) => (
                    <Chip
                        key={tag.id}
                        label={tag.name}
                        onDelete={deletable ? () => handleDelete(tag.id) : null}
                        sx={{ mr: 1, mb: 1, cursor: deletable ? 'pointer' : 'default' }}
                    />
                ))}
                {!tags.length && (
                    <Box sx={{ color: '#808080', fontStyle: 'italic' }}>
                        {deletable ? 'No tags added yet' : 'No tags available'}
                    </Box>
                )}
            </Box>
            <Divider sx={{ minWidth: '95%', ml: 1, mr: 1, border: 1, borderColor: '#c6c6c6' }} />
            <TextField
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        handleAdd();
                    }
                }}
                onBlur={handleAdd}
                placeholder={placeholder}
                variant="standard"
                sx={{
                    border: 'none !important',
                    pl: 1,
                    pr: 1,
                }}
            />
        </Box>
    );
}
