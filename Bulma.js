Vue.compenent('competence', {
    props: {
        title: '',
        contenu: ''
    },
    template:`
    <article class="message">
    <div class="message-header">
    {{title}}
    <span class="close"> x </span>
    </div>
    <div class="message-body">
    {{contenu}}
    </div>
    </article>`
})

var app = new Vue ({
    el: "#ancre"
})