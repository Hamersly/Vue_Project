import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase'
import router from './router'

Vue.config.productionTip = false


new Vue({
    store,
    vuetify,
    router,
    created() {

        fb.initializeApp({
          apiKey: "AIzaSyD0EVfpRXK079ykvuXKPbjzjxoIkw5GoDk",
          authDomain: "itc-ads-prject.firebaseapp.com",
          databaseURL: "https://itc-ads-prject.firebaseio.com",
          projectId: "itc-ads-prject",
          storageBucket: "itc-ads-prject.appspot.com",
          messagingSenderId: "1004054551163",
          appId: "1:1004054551163:web:02487a50e39dcdf51de0de",
          measurementId: "G-TD03RPKBWP"
        })
    },
    render: h => h(App)
}).$mount('#app')
