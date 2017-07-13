import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableRow from './TableRow'

class GroupMatch extends Component {

	static propTypes = {
		groupMatch: PropTypes.object
	}

	renderTableRow() {
		const { groupMatch } = this.props;
		var t = {};
		for ( let match in groupMatch.matches ) {
			if (groupMatch.matches[match].mode_name === "Match Winner") {
				t = groupMatch.matches[0];
				groupMatch.matches[0] = groupMatch.matches[match];
				groupMatch.matches[match] = t;
			}
		}
		if ( !Object.keys(t).length ) {
			groupMatch.matches[0].expand = true;
		}
		return groupMatch.matches.map((i) => <TableRow match={i} key={i.id.toString()}/>);
	}

	render () {
		const tableRow = this.renderTableRow();
		return (
			<div className="GroupMatch">
				{tableRow}
			</div>
			)
	}
}

export default GroupMatch
