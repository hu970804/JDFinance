import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import MakeMoney from "../makemoney/index.vue"
import BorrowMoney from "../borrowmoney/index.vue"
import SaveMoney from "../savemoney/index.vue"
import Download from "../special/index.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        }, {
            path: "/makemoney",
            name: "makemoney",
            component: MakeMoney,
        }, {
            path: "/borrowmoney",
            name: "borrowmoney",
            component: BorrowMoney,
        }, {
            path: "/savemoney",
            name: "savemoney",
            component: SaveMoney,
        }, {
            path: "/download",
            name: "download",
            component: Download,
        },
    ],
})
