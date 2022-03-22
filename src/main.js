// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
import "./eventBus";
import store from "./store";
store.dispatch("setting/fetchSetting");
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

Function.prototype.newBind = function(t) {
    t = t || window;
    var self = this;
    var args = [].slice.call(arguments, 1);
    var temp = function() {};
    var F = function() {
        var _arg = [].slice.call(arguments, 0);
        return self.apply(this instanceof temp ? this : t, args.concat(_arg))
    };
    temp.prototype = this.prototype;
    F.prototype = temp.prototype;
    return F
}
var obj = {
    value: 1
};

function FartherShow() {};
FartherShow.prototype.lastname = "chen";
show.prototype = new FartherShow();

function show(name, age) {
    console.log(this);
    console.log(this.value);
    console.log(name, age);
    return name + age + this.value
}
var newshow = show.newBind(obj, "cjj")
newshow(18) //this=>obj
console.log("-------------------------")
new newshow(17) //this=>fn
console.log("-------------------------")
var os = new newshow(18);
console.log(os.lastname)