import Vue from 'vue'
import App from './app.vue'
//import './asserts/style/global.styl'


import './asserts/style/test.css'
//import './asserts/images/timg.jpeg'
//import './asserts/style/test-stylus.styl'//有错

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render:(h)=>h(App)
}).$mount(root)