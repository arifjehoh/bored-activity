class GameRoom {
  constructor ({ title = '', roomStatus = '', participants = [], activities = [] }) {
    this.title = title
    this.roomStatus = roomStatus
    this.participants = participants
    this.activities = activities
  }
}

export default GameRoom
