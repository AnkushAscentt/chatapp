import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  // Get the latest queries from the Redux store
  const queryList = useSelector((state) => state.queries.queryList);

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: '#f0f0f0',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Today's Queries
      </Typography>

      <List>
        {queryList.map((item, index) => (
          <ListItem key={index} sx={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText
              primary={item.query} // Show the query text
              // secondary={`Response: ${item.response.length} cars`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
