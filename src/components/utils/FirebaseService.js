import { app } from '../utils/firebaseConfig'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const gameRoomToFirebase = async (room) => {
  const firestore = getFirestore(app)
  try {
    const docRef = await addDoc(collection(firestore, 'rooms'), {
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
    const auth = getAuth(app)
    const user = auth.currentUser
    return user.uid
  } catch (error) {
    console.log(error)
  }
}

export { gameRoomToFirebase, currentUser }