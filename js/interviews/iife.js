// (function () {
//     console.log("iife")
//     console.log(this) // своего this нет, обращается к глобальному объекту
// })();
//функция выполняется сразу при определении
// (()=>{})();

// (async () => {})(); 

// let obj = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log(this.foo);
//         console.log(self.foo);
//         (function(){
//             console.log(this.foo);
//             console.log(self.foo);
//         })()
//     }
// }

// obj.func();