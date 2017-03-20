import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeam } from '../actions'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import Moment from 'react-moment'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import {lightGreenA700, red700,grey600, grey50, transparent} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'
import DatePicker from 'material-ui/DatePicker'

class TeamDetail extends Component {

    componentDidMount () {
        this.props.dispatch(fetchTeam(this.props.params.name));
    }

    render () {
        const { teamDetail } = this.props;

        return (
            <div style={{'display': 'inline-block', width: '100%'}}>
                <div style={{'width': '38%', 'float': 'left'}}>
                    <Card style={{ 'marginTop': '10px'}}>
                        <CardTitle title={this.props.params.name} subtitle="Data from: " />
                        <div>
                            <CardText>
                                <DatePicker hintText="From" autoOk defaultDate={new Date(Date.now() - 30 * 24 * 3600 * 1000)} container="inline" />
                                <DatePicker hintText="To" autoOk defaultDate={new Date()} container="inline" />
                                <Card initiallyExpanded>
                                    <CardHeader title="Statistics" actAsExpander style={{ backgroundColor: grey600 }} titleColor={grey50} showExpandableButton={true}/>
                                    <CardText expandable={true}>
                                        <ul>
                                            <li>Average kill: {teamDetail.avgkill}</li>
                                            <li>Average death: {teamDetail.avgdeath}</li>
                                            <li>Total kill: {teamDetail.totalkill}</li>
                                            <li>Total death: {teamDetail.totaldeath}</li>
                                            <li>Winrate: {teamDetail.winrate}</li>
                                            <li>Average odds: {teamDetail.avgodds}</li>
                                        </ul></CardText>
                                </Card>
                                <Card style={{ 'marginTop': '10px'}}>
                                    <CardHeader title="F10K history" actAsExpander style={{ backgroundColor: grey600 }} titleColor={grey50} showExpandableButton={true}/>
                                    <CardText expandable={true}>
                                        <List>
                                            {
                                                teamDetail.f10kHistory
                                                    ? teamDetail.f10kHistory.map(match =>
                                                        <div key={teamDetail.f10kHistory.indexOf(match)} >
                                                            <ListItem
                                                                primaryText={match.name}
                                                                leftAvatar={
                                                                    <Avatar
                                                                        color={ match.winner.toLowerCase() !== match.name.toLowerCase()? lightGreenA700:red700} backgroundColor={transparent}
                                                                        style={{left: 8}}
                                                                    >
                                                                        {match.winner.toLowerCase() !== match.name.toLowerCase()? "W":"L"}
                                                                    </Avatar>
                                                                }
                                                                rightAvatar={
                                                                    <p>
                                                                        {match.kill + " - " + match.death}
                                                                    </p>
                                                                }
                                                                secondaryText={<p>
                                                                    <Moment fromNow ago>{match.time}</Moment> ago</p>}
                                                            />

                                                            <Divider inset={true} />
                                                        </div>
                                                    )
                                                    : ''
                                            }
                                        </List>
                                    </CardText>
                                </Card>
                            </CardText>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        teamDetail: state.team.teamDetail
    }
};

export default connect(mapStateToProps)(TeamDetail)