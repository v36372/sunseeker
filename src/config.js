var config = {}
if (process.env.REACT_APP_ENV === 'production') {
	config = {
		STATS_API:'https://dotabetstats.herokuapp.com'
	}
} else { 
	config = {
		STATS_API:'http://localhost:3000'
	}
}

export default config
