import Vue from "vue"
import Button from "./button/Button.vue"
import Icon from "./Icon.vue"
import ButtonGroup from "./button/Button-group.vue"
import Input from "./Input.vue"
import Col from "./layout/Col.vue"
import Row from "./layout/Row.vue"
import Upload from "./Upload.vue"
import Echarts from "./Echarts.vue"
import Swiper from "./swiper/Swiper.vue"
import SwiperItem from "./swiper/Swiper-item.vue"
import Calendar from "./Calendar.vue"


const install = (Vue) => {
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.component(Icon.name, Icon);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Col.name, Col);
    Vue.component(Row.name, Row);
    Vue.component(Upload.name, Upload);
    Vue.component(Echarts.name, Echarts);
    Vue.component(Swiper.name, Swiper);
    Vue.component(SwiperItem.name, SwiperItem);
    Vue.component(Calendar.name, Calendar);
}

if (typeof (window.Vue) !== "undefind") {
    install(Vue)
}


export default install
