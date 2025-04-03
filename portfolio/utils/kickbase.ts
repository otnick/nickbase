const KICKBASEROOT = process.env.KICKBASE_ROOT || 'https://api.kickbase.com/v4';

export async function login(mail: string, pw: string) {
    console.log('Logging in with email:', mail, 'and password:', pw);
    try {
        const response = await fetch(`${KICKBASEROOT}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "em": mail,
                "pass": pw,
                "loy": false,
                rep: {},
            }),
        });
        
        console.log('Raw response:', response);
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Response not OK. Status:', response.status, 'Error:', errorData);
            throw new Error('API request failed');
        }

        return response;

    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export async function getLeagues(league_id: string, token: string) {
    const auth = 'Bearer ' + token;
    try {
        const response = await fetch(`${KICKBASEROOT}/leagues/${league_id}/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': auth,
            },
        });
    }
    catch (error) {
        console.error('Error:', error);
    }
};

export async function getFeed(league_id: string, user_id: string, token: string) {
    const auth = 'Bearer ' + token;
    try {
        const response = await fetch(`${KICKBASEROOT}/leagues/${league_id}/users/${user_id}/feed`, {
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

export async function collectGift(league_id: string, token: string) {
    const auth = 'Bearer ' + token;
    try {
        const response = await fetch(`${KICKBASEROOT}/leagues/${league_id}/collectgift`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': auth,
            },
        });
        console.log('Raw response:', response);
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Response not OK. Status:', response.status, 'Error:', errorData);
            throw new Error('API request failed');
        }

        return response;

    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export async function getCurrentGift(league_id: string, token: string) {
    const auth = 'Bearer ' + token;
    try {
        const response = await fetch(`${KICKBASEROOT}/leagues/${league_id}/currentgift`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': auth,
            },
        });
        console.log('Raw response:', response);
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Response not OK. Status:', response.status, 'Error:', errorData);
            throw new Error('API request failed');
        }

        return response;

    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};
