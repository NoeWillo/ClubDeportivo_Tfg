import { firebase } from '~/plugins/firebase'

export default function({ redirect }) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      return redirect('/login_out/login')
    } else {
      console.log(user)
    }
  })
}