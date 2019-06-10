// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import 'materialize-css/dist/js/materialize.min'
// Components
import './components'
import Vuelidate from 'vuelidate'
// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import messagePlugin from '@/utils/message.plugin'
import store from '@/store'
import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

// Sync store with router
sync(store, router)

Vue.use(messagePlugin)
Vue.use(Vuelidate)

Vue.config.productionTip = false



firebase.initializeApp( {

    apiKey: "AIzaSyC0IvYsW6exPaa8DLpjuI17YUOvNm6J5Do",
    authDomain: "mylci-1975c.firebaseapp.com",
    databaseURL: "https://mylci-1975c.firebaseio.com",
    projectId: "mylci-1975c",
    storageBucket: "mylci-1975c.appspot.com",
    messagingSenderId: "874871294309",
    appId: "1:874871294309:web:cd232d4e3e947c36"
  })

let app

firebase.auth().onAuthStateChanged( ()=>{
  if(!app){
      app = new Vue({
      i18n,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  
  

} )

  
/* eslint-disable no-new */

