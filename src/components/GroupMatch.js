import React, { Component } from 'react'
import TableRow from './TableRow'

class GroupMatch extends Component {

    renderTableRow() {
        const { groupMatch } = this.props;
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