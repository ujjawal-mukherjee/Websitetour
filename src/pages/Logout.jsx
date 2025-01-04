import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            console.log('Attempting logout...');
            const response = await fetch('/logout', {
                method: 'POST',
                credentials: 'include',
            });

            console.log('Logout response:', response);
            if (response.ok) {
                alert('Logged out successfully!');
                navigate('/login');
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Failed to log out.');
            }
        } catch (error) {
            console.error('Error during logout:', error);
            alert('An error occurred while logging out.');
        }
    };

    return (
        <button onClick={handleLogout} className="logout-button">
            Logout
        </button>
    );
};

export default Logout;
