import app from './firebaseConfig'
import { getFirestore, getDocs, query, collection, where } from 'firebase/firestore'

const db = getFirestore(app)

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

export { getGameList }
