class GameRoomModel {
  constructor () {
    this.title = ''
    this.roomStatus = 'Playing'
    this.participants = []
    this.activities = []
  }

  setName (title) {
    this.title = title
  }

  setActivties (activities) {
    this.activities = activities
  }

  addParticipant (player) {
    console.log(player)
    this.participants = [...this.participants, player]
  }
}

export default GameRoomModel
