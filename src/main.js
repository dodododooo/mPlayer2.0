import Vue from 'vue'
import store from './store'
import mPlayer from './App'
import Qs from 'qs'
import axios from 'axios'

let playerDiv = document.createElement('div')
playerDiv.setAttribute('id', 'mplayer')
document.body.appendChild(playerDiv)

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://192.168.8.5/mPlayer/php/' : 'http://dodododooo.com/mplayer2/php/',
  transformRequest: [function (data) {
    return Qs.stringify(data)
  }]
})

/* eslint-disable no-new */
var mplayer = new Vue({
  el: '#mplayer',
  store,
  render: h => h(mPlayer)
})

window.mplayer = mplayer
