class GameRoomModel {
  constructor () {
    this.title = ''
    this.roomStatus = 'Not Started'
    this.participants = []
    this.activities = []
  }

  setTitle (title) {
    this.title = title
  }

  setStatus (roomStatus) {
    this.roomStatus = roomStatus
  }

  setParticipants (participants) {
    this.participants = participants
  }

  setActivities (activities) {
    this.activities = activities
  }

  whoIsTheWinner () {
    this.participants.sort(function (a, b) {
      return b.score - a.score
    })
    return this.participants[0]
  }
}

export default GameRoomModel
