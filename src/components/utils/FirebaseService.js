
import { app } from '../utils/firebaseConfig'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firestore = getFirestore(app)

const gameRoomToFirebase = async (room) => {
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

export default gameRoomToFirebase
