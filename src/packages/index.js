import Vue from "vue"
import Button from "./button/Button.vue"
import Icon from "./Icon.vue"
import ButtonGroup from "./button/Button-group.vue"
import Input from "./Input.vue"
import Col from "./layout/Col.vue"
import Row from "./layout/Row.vue"


const install = (Vue)=>{
    Vue.component(Button.name,Button);
    Vue.component(Input.name,Input);
    Vue.component(Icon.name,Icon);
    Vue.component(ButtonGroup.name,ButtonGroup);
    Vue.component(Col.name,Col);
    Vue.component(Row.name,Row);
}

if(typeof (window.Vue) !== "undefind"){
    install(Vue)
}


export default install
