import React from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import SearchBar from './components/SearchBar';
import  {addQuery} from './store/slices/querySlice';

const staticCarData = [
  {
    title: '2020 Acura TLX A-Spec w/Red Leather',
    VIN: '19UUB2F64LA003664',
    Price: '$31,999',
    image: '/images/car1.png',
  },
  {
    title: '2020 Acura TLX A-Spec w/Red Leather',
    VIN: '19UUB2F64LA003664',
    Price: '$31,999',
    image: '/images/car2.png',
  },
];

const App = () => {
  const dispatch = useDispatch();
  const queryList = useSelector((state) => state.queries.queryList);

  const handleSendMessage = (query) => {
    if (query) {
      dispatch(addQuery({ query, response: staticCarData }));
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          <ChatList messages={queryList} />
        </Box>
        <Box sx={{ flexShrink: 0 }}>
          <SearchBar onSend={handleSendMessage} />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
