import app from './firebaseConfig.js'
import { getFirestore, getDoc, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

const db = getFirestore(app)

const getGameRoom = async () => {
  try {
    const querySnapshot = await getDoc(doc(db, 'rooms', 'xXezGh7zCKNXaDvihtyr'))
    console.log(querySnapshot.data())
    return querySnapshot.data()
  } catch (error) {
    console.error(error)
  }
  /*
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  })
  */
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

const endGame = async (roomId) => {
  try {
    await updateDoc(doc(db, 'rooms', roomId), {
      status: 'Done'
    })
  } catch (error) {
    console.error(error)
  }
}

export { getGameRoom, joinGame, leaveGame, endGame }
