class GameRoomModel {
  constructor () {
    this.title = ''
    this.roomStatus = 'Not Started'
    this.participants = []
    this.activities = []
  }

  setName (title) {
    this.title = title
  }

  setActivties (activities) {
    this.activities = activities
  }
}

export default GameRoomModel
