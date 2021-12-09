import app from './firebaseConfig.js'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

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

export default getGameRoom
