const STATS_API = 'https://dotabetstats.herokuapp.com';

let serialize = function(obj) {
    let str = [];
    for(let p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
};

// Actions for matches
export const REQUEST_MATCHES = 'REQUEST_MATCHES';
export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';

export const requestMatches = (params) => ({
    type: REQUEST_MATCHES,
    params: params
});

export const receiveMatches = (json) => ({
    type: RECEIVE_MATCHES,
    listMatches: json,
    receivedAt: Date.now()
});

export const fetchMatches = params => dispatch => {
    let endPoint = `${STATS_API}/matches?${serialize(params)}`;
    dispatch(requestMatches(params));
    return fetch(endPoint)
        .then(response => response.json())
        .then(json => dispatch(receiveMatches(json)))
};

// Actions for match detail
export const REQUEST_MATCH = 'REQUEST_MATCH';
export const RECEIVE_MATCH = 'RECEIVE_MATCH';

export const requestMatch = (id) => ({
    type: REQUEST_MATCH,
    matchID: id
});

export const receiveMatch = (json) => ({
    type: RECEIVE_MATCH,
    matchDetail: json,
    receivedAt: Date.now()
});

export const fetchMatch = id => dispatch => {
    dispatch(requestMatch(id));
    return fetch(`${STATS_API}/matches/${id}`)
        .then(response => response.json())
        .then(json => dispatch(receiveMatch(json)))
};

// Actions for team detail
export const REQUEST_TEAM = 'REQUEST_TEAM';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

export const requestTeam = (id) => ({
    type: REQUEST_TEAM,
    teamId: id
});

export const receiveTeam = (json) => ({
    type: RECEIVE_TEAM,
    teamDetail: json,
    receivedAt: Date.now()
});

export const fetchTeam = id => dispatch => {
    dispatch(requestTeam(id));
    return fetch(`${STATS_API}/team/${id}/f10k`)
        .then(response => response.json())
        .then(json => dispatch(receiveTeam(json)))
};

export const REQUEST_HISTORY = 'REQUEST_HISTORY';
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';

export const requestHistory = (id) => ({
    type: REQUEST_HISTORY,
    teamId: id
});

export const receiveHistory = (json) => ({
    type: RECEIVE_HISTORY,
    teamHistory: json,
    receivedAt: Date.now()
});

export const fetchHistory = id => dispatch => {
    dispatch(requestTeam(id));
    return fetch(`${STATS_API}/team/${id}`)
        .then(response => response.json())
        .then(json => dispatch(receiveHistory(json)))
};