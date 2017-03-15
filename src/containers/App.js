import React, {Component} from 'react';
import ListMatch from '../components/ListMatch'

const DOTASTATS_API = `https://dotabetstats.herokuapp.com`

class App extends Component {
    constructor(config) {
        super(config)
        this.state = {
            listmatch: [
            ]
        }
    }

    componentDidMount () {
        console.log('App mounted')
        this.fetchListMatch()
    }

    fetchListMatch = () => {
        fetch(DOTASTATS_API + "/match?limit=100&status=open")
            .then( res => {
                if (res.ok) {
                    res.json().then((data) => {
                        this.setState({
                            listmatch: data
                        })
                    })
                }
            })
    }

    render() {
        const {listmatch} = this.state;
        return (
            <div>
                <ListMatch listmatch={listmatch} />
            </div>
        );
    }
}

export default App

