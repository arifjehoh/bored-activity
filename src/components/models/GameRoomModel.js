class GameRoomModel {
  constructor () {
    this.title = ''
    this.roomStatus = 'Playing'
    this.participants = []
    this.activities = []
    this.owner = ''
  }

  setName (title) {
    this.title = title
  }

  setActivties (activities) {
    this.activities = activities
  }

  addParticipant (player) {
    this.participants = [...this.participants, player]
  }

  setOwner (player) {
    this.owner = player
  }
}

export default GameRoomModel
