import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Leaderboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    console.log(this.props.players)
    console.log('round object', this.props.round)
    return (
      <div className="container">
        <h1 className="leadertitle title is-1">Leaderboard page</h1>
        <table className="table is-bordered is-fullwidth is-striped">
          <thead className="thead">
            <tr className="tr">
              <th className="th has-text-centered">Position</th>
              <th className="th has-text-centered">Icon</th>
              <th className="th has-text-centered">Player Name</th>
              <th className="th has-text-centered">Round 1</th>
              <th className="th has-text-centered">Round 2</th>
              <th className="th has-text-centered">Round 3</th>
              <th className="th has-text-centered">Final Score</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {this.props.players.map(player => {
              return <tr className="tr" key={player.name}>
                <th className="th has-text-centered">1st</th>
                <th className="th has-text-centered"><img src={player.icon} /></th>
                <th className="th has-text-centered">{player.name} </th>
                <th className="th has-text-centered">{this.props.round.playerScores[0].score}</th>
                <th className="th has-text-centered">points</th>
                <th className="th has-text-centered">points</th>
                <th className="th has-text-centered">Total score</th>
              </tr>
            })}
          </tbody>
        </table>
        <hr />
        <Link className="button is-large" to="/">Play Again</Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    players: state.players,
    round: state.round
  }
}

export default connect(mapStateToProps)(Leaderboard)
