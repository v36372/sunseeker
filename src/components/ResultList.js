import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {lightGreenA700, red700,grey600, grey50, transparent} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'
import {List, ListItem} from 'material-ui/List'
import Moment from 'react-moment'

const groupStyle = {
    marginBottom: 12,
    borderBottom: 'solid 1px black'
};

class ResultList extends Component {

    matchScore = (match) => {
        if(match.scorea && match.scoreb)
            return `${match.scorea} - ${match.scoreb}`;
        else {
            return 'No Info';
        }
    };

    render () {
        const { resultList } = this.props || [];
        const { teamName } = this.props;

        return (
            <Card style={{ 'marginTop': '10px'}}>
                <CardHeader title="Matches History" actAsExpander onClick={this.props.getRecent} style={{ backgroundColor: grey600 }} titleColor={grey50} showExpandableButton={true}/>
                <CardText expandable={true}>
                    <List>
                        {
                            resultList ?
                                resultList.map(groupMatch =>
                                    <div className="groupMatch" key={groupMatch.series_id} style={groupStyle}>
                                        {
                                            groupMatch ?
                                                groupMatch.matches.map(match =>
                                                    <div key={match.id} >
                                                        <ListItem
                                                            primaryText={match.matchname}
                                                            leftAvatar={
                                                                match.winner
                                                                    ?
                                                                        <Avatar color={ match.winner.toLowerCase() === teamName ? lightGreenA700:red700}
                                                                                backgroundColor={transparent}
                                                                                style={{left: 8}}>
                                                                            {match.winner.toLowerCase() === teamName? "W":"L"}
                                                                        </Avatar>
                                                                    :
                                                                        <Avatar/>
                                                            }
                                                            rightAvatar={
                                                                <p>
                                                                    {this.matchScore(match)}
                                                                </p>
                                                            }
                                                            secondaryText={
                                                                <div>
                                                                    <Moment fromNow>
                                                                        {match.time}
                                                                    </Moment>
                                                                </div>}
                                                        />

                                                        <Divider inset={true} />
                                                    </div>
                                                )
                                            : ''
                                        }
                                    </div>
                                )
                                : ''
                        }
                    </List>
                </CardText>
            </Card>
        )
    }
}

export default ResultList
