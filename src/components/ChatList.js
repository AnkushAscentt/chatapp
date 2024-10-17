import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const ChatList = ({ messages }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        bgcolor: '#f5f5f5', 
        overflowY: 'auto',
      }}
    >
      {messages.map((message, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Typography
            sx={{
              alignSelf: 'flex-end',
              bgcolor: '#3f51b5',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '20px',
              maxWidth: '60%',
              marginBottom: 1,
            }}
          >
            {message.query}
          </Typography>

          {/* If response is an array (car data) */}
          {Array.isArray(message.response) ? (
            message.response.map((car, idx) => (
              <Card
                key={idx}
                sx={{
                  display: 'flex',
                  marginBottom: 2,
                  alignItems: 'center',
                  padding: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 100, marginRight: 2 }}
                  image={car.image}
                  alt={car.title}
                />
                <CardContent>
                  <Typography variant="h6">{car.title}</Typography>
                  <Typography variant="subtitle1">{car.Price}</Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography
              sx={{
                alignSelf: 'flex-start',
                bgcolor: '#e0e0e0',
                color: '#000',
                padding: '8px 16px',
                borderRadius: '20px',
                maxWidth: '60%',
              }}
            >
              {message.response}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ChatList;
