import app from './firebaseConfig.js'
import { getFirestore, getDoc, getDocs, doc, updateDoc, arrayUnion, arrayRemove, collection, addDoc, query, where } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, signOut } from 'firebase/auth'

const db = getFirestore(app)
const auth = getAuth(app)

const getGameList = async () => {
  try {
    const docs = await getDocs(query(collection(db, 'rooms'), where('status', '!=', 'Done')))
    const activities = []
    docs.forEach((doc) => {
      activities.push({
        content: doc.data(),
        id: doc.id
      })
    })
    return activities
  } catch (error) {
    console.log(error)
  }
}

const getGameRoom = async (roomId) => {
  try {
    const querySnapshot = await getDoc(doc(db, 'rooms', roomId))
    return querySnapshot.data()
  } catch (error) {
    console.error(error)
  }
  return null
}

const joinGame = async (roomId, player) => {
  try {
    console.log(player)
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

const gameRoomToFirebase = async (room) => {
  try {
    const docRef = await addDoc(collection(db, 'rooms'), {
      title: room.title,
      status: room.roomStatus,
      participants: room.participants,
      activities: room.activities,
      owner: auth.currentUser.uid
    })
    console.log('Document written with ID: ', docRef.id)
    return docRef.id
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

const currentUser = () => {
  try {
    const user = auth.currentUser
    return user
  } catch (error) {
    console.log(error)
  }
}

const signInFromForm = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      saveUserDetail(user.displayName, user.email, user.uid)
      return user
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        alert('Email does not exist')
      } if (error.code === 'auth/wrong-password') {
        alert('Password is wrong')
      }
    })
}

const createUserFromForm = (name, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(userCredential.user, {
        displayName: name
      }).catch((console.error))
      saveUserDetail(userCredential.user.displayName, userCredential.user.email, userCredential.user.uid)
      return userCredential.user
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        alert('this email is already being used.')
      }
      if (error.code === 'auth/weak-password') {
        alert('password is to weak.')
      }
    })
}

const requestResetPassword = async (email) => {
  return await sendPasswordResetEmail(auth, email)
    .then((data) => {
      alert('A new password is sent by email!')
      return true
    })
    .catch(() => {
      alert('Need to enter an email')
      return false
    })
}

const signOutUser = () => {
  signOut(auth)
    .then(console.log)
    .catch(console.error)
}

const saveUserDetail = async (displayName, email, uid) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      displayName: displayName,
      email: email,
      uid: uid
    })
    console.log('Document written with ID: ', docRef.id)
    return docRef.id
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

// TODO FETCH USER DETAIL
export { gameRoomToFirebase, signInFromForm, currentUser, getGameRoom, getGameList, joinGame, leaveGame, endGame, completeTask, createUserFromForm, requestResetPassword, signOutUser }
