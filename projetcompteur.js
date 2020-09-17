//Définiion d'un nouveau composant applelé 'compteur
Vue.component('compteur', {
    data: function(){
        return{
            comptage: 0
        }
    },
    template: '<button v-on:click = "comptage++">Vous m\'avez cliqué {{ comptage}} fois.</button>'

})
var app = new Vue({
    el: '#Projetcompteur'
})