import axios from 'axios'; // Importing axios for HTTP requests

// Base URL for user-related API endpoints
const USER_API_BASE_URL = 'http://localhost:8080/api/users'; // Change this to the actual base URL if different

class UpdateUserService {

    // Method to update a user by their ID
    updateUser(userId, updateUserDto, token) {
        // Logga token för att kontrollera att den hämtas korrekt
        console.log("Token being used:", token);
        
        // Configuring headers with the token for authentication
        const config = {
            headers: {
                Authorization: `Bearer ${token}`, // Passing the token in Authorization header
                'Content-Type': 'application/json' // Setting content type to JSON
            }
        };

        // Sending a PUT request to update user
        return axios.put(`${USER_API_BASE_URL}/id/${userId}`, updateUserDto, config);
    }
}

export default new UpdateUserService(); // Exporting an instance of UpdateUserService for use in other components


