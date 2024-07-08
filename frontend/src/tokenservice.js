// tokenService.js

// Function to save token to local storage
export const saveToken = (token) => {
    localStorage.setItem('token', token);
};

// Function to retrieve token from local storage
export const getToken = () => {
    return localStorage.getItem('token');
};

// Function to remove token from local storage
export const removeToken = () => {
    localStorage.removeItem('token');
};
