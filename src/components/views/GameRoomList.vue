<template>
  <div>
    <h1> List of open games: </h1>
    <div>
      <table id = 'table'>
        <tr>
          <th>Game title </th>
          <th>Game status</th>
        </tr>
        <tr>{{this.rooms}} </tr>

      </table>
    </div>
  </div>
</template>

<script>
import { app } from '../utils/firebaseConfig'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
const db = getFirestore()
const getGameList = async () => {
  try {
    const querySnapShot = await getDocs(collection(db, 'rooms'))
    const list = []
    querySnapShot.forEach((doc) => {
      list.push(doc.data())
    })
  } catch (error) {
    console.log(error)
  }
}
export default {
  name: 'GameRoomList',
  data () {
    return {
      rooms: getGameList()
    }
  },
  methods: {
    test: function () {
      console.log(app, db, collection, getDocs)
    }
  }
}

</script>
