class GameRoomModel {
  constructor () {
    this.title = ''
    this.roomStatus = 'Not Started'
    this.participants = []
    this.activities = []
    this.owner = ''
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

  setOwner (player) {
    this.owner = player
  }

  changeStatus () {
    this.roomStatus = this.roomStatus === 'Playing' ? 'Done' : 'Playing'
  }
}

export default GameRoomModel
