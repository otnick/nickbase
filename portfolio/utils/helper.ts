export function fetchStorage() {   
    try{
    let userData = ref(localStorage.getItem('userSession') || '');
    let token = JSON.parse(userData.value).token;
    let userID = JSON.parse(userData.value).user.id;
    let leagues = JSON.parse(userData.value).leagues;
    let userName = JSON.parse(userData.value).user.name;
    let cover = JSON.parse(userData.value).user.cover;

    return {userData, token, userID, leagues, userName, cover};
    }
    catch (error) {
        console.error('Error:', error);
    }
};

export const loadLeague = async (leagueID: any, token: any) => {
    try {
        return await getLeagues(leagueID, token);
    } catch (error) {
        console.error('Error:', error);
    }
};