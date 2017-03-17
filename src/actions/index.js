const STATS_API = 'https://dotabetstats.herokuapp.com';

// Actions for matches page
export const REQUEST_MATCHES = 'REQUEST_MATCHES';
export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';

export const requestMatches = () => ({
    type: REQUEST_MATCHES
})

export const receiveMatches = (json) => ({
    type: RECEIVE_MATCHES,
    listMatches: json,
    receivedAt: Date.now()
});

export const fetchMatches = () => dispatch => {
    dispatch(requestMatches());
    return fetch(STATS_API + '/match?limit=100&status=open')
        .then(response => response.json())
        .then(json => dispatch(receiveMatches(json)))
};

// Actions for team detail
export const REQUEST_TEAM = 'REQUEST_TEAM';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

export const requestTeam = (id) => ({
    type: REQUEST_TEAM,
    teamId: id
})

export const receiveTeam = (json) => ({
    type: RECEIVE_TEAM,
    teamDetail: json,
    receivedAt: Date.now()
});

export const fetchTeam = (id) => dispatch => {
    dispatch(requestTeam(id));
    return fetch(STATS_API + "/f10k/" + id)
        .then(response => response.json())
        .then(json => dispatch(receiveTeam(json)))
};