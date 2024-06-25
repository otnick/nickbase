import axios from 'axios'

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
            }),
        });
        const data = await response.json();
        console.log('Success:', data);
        return data;

    } catch (error) {
        // Behandlung von Netzwerkfehlern und anderen Problemen
        console.error('Error during login:', error);
    }
}

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