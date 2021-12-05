class GameRoom {
  constructor ({ title = '', roomStatus = '', participants = [], activities = [] }) {
    this.title = title
    this.roomStatus = roomStatus
    this.participants = participants
    this.activities = activities
  }

  whoIsTheWinner () {
    this.participants.sort(function (a, b) {
      return b.score - a.score
    })
    return this.participants[0]
  }
}

export default GameRoom
