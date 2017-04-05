import Vue from 'vue'
import Vuelocal from '../../'

Vue.use(Vuelocal);

new Vue({
  name: 'local',  
  data: {
    keys: {},
    message: 'hello!'
  }
})
