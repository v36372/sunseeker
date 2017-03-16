const STATS_API = 'https://dotabetstats.herokuapp.com';

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