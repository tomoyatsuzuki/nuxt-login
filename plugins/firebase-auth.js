import firebase from 'firebase/app'
import 'firebase/auth'

export default ({
  store
}) =>
new Promise((resolve) => {
  firebase.auth().onAuthStateChanged(() => {
    const currentUser = firebase.auth().currentUser

    const payload = currentUser ?
      {
        photoURL: currentUser.photoURL,
        photuidoURL: currentUser.uid,
        email: currentUser.email,
        name: currentUser.displayName
      } :
      null

    store.commit('setCurrentUser', payload)
    resolve()
  })
})