import app from './firebaseConfig.js'
import { getFirestore, getDoc, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

const db = getFirestore(app)

const getGameRoom = async () => {
  try {
    const querySnapshot = await getDoc(doc(db, 'rooms', 'LpaNnbRc28U9ZX6XQZml'))
    console.log(querySnapshot.data())
    return querySnapshot.data()
  } catch (error) {
    console.error(error)
  }
  return null
}

const joinGame = async (roomId, player) => {
  try {
    await updateDoc(doc(db, 'rooms', roomId), {
      participants: arrayUnion(player)
    })
  } catch (error) {
    console.error(error)
  }
}

const leaveGame = async (roomId, player) => {
  try {
    await updateDoc(doc(db, 'rooms', roomId), {
      participants: arrayRemove(player)
    })
  } catch (error) {
    console.error(error)
  }
}

const endGame = async (roomId, status) => {
  try {
    await updateDoc(doc(db, 'rooms', roomId), {
      status: status
    })
  } catch (error) {
    console.error(error)
  }
}

const completeTask = async (roomId, activities) => {
  try {
    await updateDoc(doc(db, 'rooms', roomId), {
      activities: activities
    })
  } catch (error) {
    console.error(error)
  }
}

export { getGameRoom, joinGame, leaveGame, endGame, completeTask }
