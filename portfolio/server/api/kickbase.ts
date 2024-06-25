export async function login(mail: string, pw: string) {
    console.log('Logging in with email:', mail, 'and password:', pw);
    try {
        const response = await fetch('https://api.kickbase.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: mail,
                password: pw,
            }),
        });

        console.log('Raw response:', response);

        if (response.ok) {
            const text = await response.text();
            console.log('Response text:', text);
            if (text) {
                const data = JSON.parse(text);
                console.log('Success:', data);
                localStorage.setItem('userSession', data);
                return data;
            } else {
                console.warn('Empty response body received');
                return {};
            }
        } else {
            const errorText = await response.text();
            console.error('Error: Non-JSON response received:', errorText);
            throw new Error('Non-JSON response received');
        }
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
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