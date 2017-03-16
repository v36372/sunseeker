import React, { Component } from 'react'
import TableRow from './TableRow'

class ListMatch extends Component {
    renderTableRows() {
        const { listMatches } = this.props;
        return listMatches.map((i) => <TableRow match={i} key={i.id.toString()}/>);
    }
    render (){
        const tableRows = this.renderTableRows();
        return (
            <div className="container-fluid">
                {tableRows}
            </div>
        )
    }
}

export default ListMatch