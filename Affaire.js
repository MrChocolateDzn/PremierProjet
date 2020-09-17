Vue.component('afaire-item',{
    props: {
        liste: Object
    },
    template: '<li> {{ liste.code}} - {{ liste.libelle }} </li>'

})
var app = new Vue({
    el: '#grandeliste',
    data() {
        return {
            listeSlam: [
                {
                    id: 1,
                    code: 'SLAM3',
                    libelle: 'Data'
                },
                {
                    id: 2,
                    code: 'SLAM4',
                    libelle: 'Dev'
                },
                {
                    id: 3,
                    code: 'PPE',
                    libelle: 'Projet'
                }
            ]
        }
    }
})