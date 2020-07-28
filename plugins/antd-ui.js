import Vue from 'vue'

// import Antd from 'ant-design-vue/lib'
// Vue.use(Antd)

// 引入需要的 ant-design 组件
import Icon from 'ant-design-vue/lib/icon'
import Button from 'ant-design-vue/lib/button'
import Layout from 'ant-design-vue/lib/layout'
import Carousel from 'ant-design-vue/lib/carousel'
import BackTop from 'ant-design-vue/lib/back-top'
import Form from 'ant-design-vue/lib/form'
import Input from 'ant-design-vue/lib/input'
import Select from 'ant-design-vue/lib/select'
import Checkbox from 'ant-design-vue/lib/checkbox'
import Cascader from 'ant-design-vue/lib/cascader'
import Pagination from 'ant-design-vue/lib/pagination'
import Breadcrumb from 'ant-design-vue/lib/breadcrumb'
import Table from 'ant-design-vue/lib/table'
import Radio from 'ant-design-vue/lib/radio'
import Message from 'ant-design-vue/lib/message'
import Spin from 'ant-design-vue/lib/spin'

Vue.prototype.$message = Message

Vue.use(Icon)
Vue.use(Button)
Vue.use(Layout)
Vue.use(Carousel)
Vue.use(BackTop)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Cascader)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(Radio)
Vue.use(Table)
Vue.use(Spin)
