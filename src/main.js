import Vue from 'vue'
import store from 'store'

export default Vue.directive('local', {
  bind: function (el, binding, vnode) {
    var render = function (data) {
      el.innerHTML = data;
    }
    switch (binding.arg) {
      case 'get':
        // Vue.set(binding.def.data, binding.expression, '');
        // console.log("get=", binding)
        render(store.get(binding.expression))
        break;
      case 'set':
        store.set(Object.keys(binding.modifiers)[0], binding.value)
        break;
      default:
        break;
    }
  }
})
