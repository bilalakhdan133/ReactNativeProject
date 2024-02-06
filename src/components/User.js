import React, { useEffect, useState } from 'react';

function User() {
    useEffect(() => {
        // Fetch data from the API
        fetch('https://randomuser.me/api/?results=5')
          .then((response) => response.json())
          .then((data) => {
            setTimeout(() => {
              setUserData(data.results);
              setIsLoading(false);
            }, 5000); // Set loading to false after 5 seconds
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setIsLoading(false); // Set loading to false in case of error
          });
      }, []);
}

export default User;