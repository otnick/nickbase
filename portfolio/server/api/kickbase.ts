import axios from 'axios'

export async function login() {
    axios({
        url: 'https://api.kickbase.com/user/login',
        method: 'POST',
        data: {
            email: localStorage.getItem('user'),
            password: localStorage.getItem('password'),
            ext: true,
        }
    })
    .then(async (response) => {
        if (response.status === 200 && response.data.token && response.data.tokenExp) {
            // localStorage.setItem(Constants.LOCALSTORAGE.BEARER_TOKEN, response.data.token);
            // localStorage.setItem(Constants.LOCALSTORAGE.BEARER_TOKEN_EXPIRATION, response.data.tokenExp);
            // store.commit('setLoading', true);
            // // Beispiel für eine weitere Aktion nach erfolgreicher Anmeldung
            // await this.loadClubs(); // Beispielhafte Nachladeaktion
            // window.location.reload();
        } else {
            // store.commit('setErrorMessage', 'Could not find valid token data');
        }
    })
    .catch((error) => {
        // if (error.response) {
        //     if (error.response.status === 401) {
        //         store.commit('setErrorMessage', 'Unauthorized: Invalid credentials');
        //     } else {
        //         store.commit('setErrorMessage', `Error: ${error.response.status}`);
        //     }
        // } else if (error.request) {
        //     store.commit('setErrorMessage', 'Network error: Could not reach the server');
        // } else {
        //     store.commit('setErrorMessage', 'Login issues: Please try again later');
        // }
    });
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