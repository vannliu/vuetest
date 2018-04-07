// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

// import {
// 	Upload,
// 	Message,
//     Button,
//     Input,
//     Select,
//     Option,
//     Form,
//     FormItem,
//     Cascader,
//     Autocomplete,
//     Tag,
//     Loading,
//     MessageBox,
// 	Alert,
// 	Breadcrumb,
// 	BreadcrumbItem,
// 	Checkbox,
// 	TimePicker,
// 	DatePicker,
// 	Dialog
// } from 'element-ui'
// // import 'element-ui/lib/theme-chalk/index.css'
// import './assets/scss/element-variables.scss'

// // Vue.use(ElementUI)
// Vue.use(Upload)
// Vue.use(Button)
// Vue.use(Input)
// Vue.use(Select)
// Vue.use(Option)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Cascader)
// Vue.use(Autocomplete)
// Vue.use(Tag)
// Vue.use(Alert)
// Vue.use(Breadcrumb)
// Vue.use(BreadcrumbItem)
// Vue.use(Checkbox)
// Vue.use(TimePicker)
// Vue.use(DatePicker)
// Vue.use(Dialog)

// Vue.use(Loading.directive);

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
