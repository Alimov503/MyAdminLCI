export default {
    install(Vue, options){
        Vue.prototype.$message = function(html){
            alert(html)
        }
        Vue.prototype.$error = function(html) {
            alert( `Ошибка: ${html}` )
        }
    }
}