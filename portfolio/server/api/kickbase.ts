
export async function login(email: string, password: string) {
    try {
        const response = await fetch('https://api.kickbase.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                ext: false,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const responseData = await response.json();

        // Assuming the response data contains some session-relevant information
        // Store the response data in sessionStorage
        localStorage.setItem('userSession', JSON.stringify(responseData));

        return responseData;

    }
    catch (error) {
        console.error('Error: Couldnt log in.', error);
    }
};

// GET /leagues/[league_id]/me HTTP/1.1
// Host: api.kickbase.com
// Content-Type: application/json
// Accept: application/json
// Cookie: kkstrauth=[token];

export async function getLeagues(league_id: string, token: string) {
    const auth = 'Bearer ' + token;
    try {
        const response = await fetch(`https://api.kickbase.com/leagues/${league_id}/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': auth,
            },
        });
        console.log("leagues", response);
    }
    catch (error) {
        console.error('Error:', error);
    }
};

// GET /leagues/[league_id]/users/[user_id]/feed HTTP/1.1
// Host: api.kickbase.com
// Content-Type: application/json
// Accept: application/json
// Cookie: kkstrauth=[token];

export async function getFeed(league_id: string, user_id: string, token: string) {
    const auth = 'Bearer ' + token;
    try {
        const response = await fetch(`https://api.kickbase.com/leagues/${league_id}/users/${user_id}/feed`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': auth,
            },
        });
        console.log("feed", response);
    }
    catch (error) {
        console.error('Error:', error);
    }
};