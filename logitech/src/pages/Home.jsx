import React, { useEffect, useState } from 'react';
import { Button, Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Posts } from '../components/posts.jsx';

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.length !== 0); // Track login state

  // Clear local storage on the first page load
  useEffect(() => {
    const isFirstLoad = sessionStorage.getItem('firstLoad'); 

    if (!isFirstLoad) {
      localStorage.clear(); // Clear local storage on the first load
      sessionStorage.setItem('firstLoad', 'true'); // Mark as loaded
      setIsLoggedIn(false); // Ensure it reflects logged-out state
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <div style={{ fontSize: 'larger' }}>
        Please Login or Signup
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              navigate('/signin');
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate('/signup');
            }}
          >
            SignUp
          </Button>
        </Stack>
      </div>
    );
  } else {
    return (
      <div>
        <Posts />
      </div>
    );
  }
}

export default Home;
