import serialize from '../helper/serialize'
import config from '../config'

// match history for team page
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
	dispatch(requestHistory(id));
	return fetch(`${config.STATS_API}/team/${id}`)
		.then(response => response.json())
		.then(json => dispatch(receiveHistory(json)))
};

// match history for match page
export const REQUEST_HISTORY_MATCH = 'REQUEST_HISTORY_MATCH';
export const RECEIVE_HISTORY_MATCH = 'RECEIVE_HISTORY_MATCH';

export const requestHistoryMatch = (id, side) => ({
	type: REQUEST_HISTORY_MATCH,
	teamId: id,
	teamSide: side
});

export const receiveHistoryMatch = (json, side) => ({
	type: RECEIVE_HISTORY_MATCH,
	teamHistory: json,
	teamSide: side,
	receivedAt: Date.now(),
});

export const fetchHistoryMatch = (id, side, game) => dispatch => {
	dispatch(requestHistoryMatch(id, side));
	return fetch(`${config.STATS_API}/team/${id}?game=${game}`)
		.then(response => response.json())
		.then(json => dispatch(receiveHistoryMatch(json, side)))
};

// mutual history between two teams
export const REQUEST_MUTUAL_HISTORY = 'REQUEST_MUTUAL_HISTORY';
export const RECEIVE_MUTUAL_HISTORY = 'RECEIVE_MUTUAL_HISTORY';

export const requestMutualHistory = (teamA, teamB) => ({
	type: REQUEST_MUTUAL_HISTORY,
	teamA: teamA,
	teamB: teamB
});

export const receiveMutualHistory = (json) => ({
	type: RECEIVE_MUTUAL_HISTORY,
	mutualHistory: json,
	receivedAt: Date.now(),
});

export const fetchMutualHistory = (teamA, teamB) => dispatch => {
	dispatch(requestMutualHistory(teamA, teamB));
	return fetch(`${config.STATS_API}/history?teama=${teamA}&teamb=${teamB}`)
		.then(response => response.json())
		.then(json => dispatch(receiveMutualHistory(json)))
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
	let endPoint = `${config.STATS_API}/matches?${serialize(params)}`;
	dispatch(requestMatches(params));
	return fetch(endPoint)
		.then(response => response.json())
		.then(json => dispatch(receiveMatches(json)))
};

// Actions for team detail
export const REQUEST_TEAM = 'REQUEST_TEAM';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

export const requestTeam = (id) => ({
	type: REQUEST_TEAM,
	teamId: id
});

export const receiveTeam = (json, side) => ({
	type: RECEIVE_TEAM,
	teamDetail: json,
	receivedAt: Date.now(),
	teamSide: side
});

export const fetchTeam = (id, side) => dispatch => {
	dispatch(requestTeam(id));
	return fetch(`${config.STATS_API}/team/${id}/f10k`)
		.then(response => response.json())
		.then(json => dispatch(receiveTeam(json, side)))
};

// Actions for team info
export const REQUEST_TEAM_INFO = 'REQUEST_TEAM_INFO';
export const RECEIVE_TEAM_INFO = 'RECEIVE_TEAM_INFO';

export const requestTeamInfo = (slug, game) => ({
	type: REQUEST_TEAM_INFO,
	teamSlug: slug,
	game: game
});

export const receiveTeamInfo = (json) => ({
	type: RECEIVE_TEAM_INFO,
	teamInfo: json,
	receivedAt: Date.now()
});

export const fetchTeamInfo = (slug, game) => dispatch => {
	dispatch(requestTeamInfo(slug, game));
	return fetch(`${config.STATS_API}/team-info/${slug}?game=${game}`)
		.then(response => response.json())
		.then(json => dispatch(receiveTeamInfo(json)))
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
	return fetch(`${config.STATS_API}/matches/${id}`)
		.then(response => response.json())
		.then(json => dispatch(receiveMatch(json)))
		.then(json => {
			dispatch(fetchMutualHistory(json.matchDetail.teama, json.matchDetail.teamb));
			dispatch(fetchHistoryMatch(json.matchDetail.teama, 'teama', json.matchDetail.game));
			dispatch(fetchHistoryMatch(json.matchDetail.teamb, 'teamb', json.matchDetail.game));
			if (json.matchDetail.game === "dota") {
				dispatch(fetchTeam(json.matchDetail.teama, 'teama'));
				dispatch(fetchTeam(json.matchDetail.teamb, 'teamb'));
			}
		})
};

// Action to post feedback

export const postFeedback = (name, feedback) => {
	return fetch(`${config.STATS_API}/feedback`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			name: name,
			feedback: feedback
		})
	})
};
