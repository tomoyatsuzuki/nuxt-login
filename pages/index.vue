<template>
  <div class="container">
    <div>
      <h1 class="title">
        ログインページ
      </h1>
      <p>{{ $store.getters.isLogin ? 'ログイン中' : 'ログアウト中' }}</p>
      <p v-if="$store.getters.isLogin">
          {{ $store.state.user.name }}
      </p>
      <div class="button--green" @click="login">
        ログイン
      </div>
      <div class="button--green" @click="signout">
        サインアウト
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          alert('ok')
        })
        .catch((error) => {
          alert('ログイン失敗', error)
        })
    },
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('サインアウト')
        })
        .catch((error) => {
          alert('サインアウト失敗', error)
        })
    }
  }
}
</script>