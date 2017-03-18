import React, { Component } from 'react'
import GroupMatch from './GroupMatch'

class ListMatch extends Component {
    renderTableRows() {
        const { listMatches } = this.props;
        return listMatches.map((i) => <GroupMatch groupMatch={i} key={i.series_id}/>);
    }
    render () {
        const groupMatch = this.renderTableRows();
        return (
            <div className="ListMatch">
                {groupMatch}
            </div>
        )
    }
}

export default ListMatch