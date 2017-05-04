import React from 'react'
import styles from './Table.styles'

class Table extends React.Component {
    constructor() {
        super()
        this.state = {
            data: ''
        }
    }

render() {
    return(
        <div className='tableAreaContainer' style={styles.tableAreaContainer}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start</th>
                        <th>Stop</th>
                        <th>Activity</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.tableRow}>{this.state.data}Data Here</td>
                        <td style={styles.tableRow}>{this.state.data}Data Here</td>
                        <td style={styles.tableRow}>{this.state.data}Data Here</td>
                        <td style={styles.tableRow}>{this.state.data}Data Here</td>
                    </tr>
                    <tr>
                        <td style={styles.tableRow}>Cell</td>
                        <td style={styles.tableRow}>Cell</td>
                        <td style={styles.tableRow}>Cell</td>
                        <td style={styles.tableRow}>Cell</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}

export default Table