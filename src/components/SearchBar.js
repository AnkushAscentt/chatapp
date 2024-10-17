import React, { useState } from 'react';
import { AppBar, Toolbar, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SearchBar = ({ onSend }) => {
  const [query, setQuery] = useState('');

  const handleSend = () => {
    if (query.trim()) {
      onSend(query); // Call the onSend function passed from App.js
      setQuery(''); // Clear input after sending
    }
  };

  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ display: 'flex', gap: 2 }}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Type your message..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()} // Handle "Enter" key press
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
