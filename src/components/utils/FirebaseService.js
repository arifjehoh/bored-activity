import app from './firebaseConfig'
import { getFirestore, getDocs, query, collection, where, addDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const db = getFirestore(app)
const auth = getAuth(app)

const getGameList = async () => {
  try {
    const docs = await getDocs(query(collection(db, 'rooms'), where('status', '!=', 'Done')))
    let activities = []
    docs.forEach((doc) => {
      activities = [...activities, doc.data()]
    })
    return activities
  } catch (error) {
    console.log(error)
  }
}

const gameRoomToFirebase = async (room) => {
  try {
    const docRef = await addDoc(collection(db, 'rooms'), {
      title: room.title,
      status: room.roomStatus,
      participants: room.participants,
      activities: room.activities
    })
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

const currentUser = () => {
  try {
    const user = auth.currentUser
    return user.uid
  } catch (error) {
    console.log(error)
  }
}
export { gameRoomToFirebase, currentUser, getGameList }
