import app from './firebaseConfig.js'
import { getFirestore, getDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore'

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

const addParticipant = async (roomId, player) => {
  try {
    await updateDoc(doc(db, 'rooms', roomId), {
      participants: arrayUnion(player)
    })
  } catch (error) {
    console.error(error)
  }
}

export { getGameRoom, addParticipant }
