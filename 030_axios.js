var app= new Vue({
    el: '#totoro',    
    mounted()
    {
        window.axios.get('https://pokeapi.co/api/v2/pokemon/1/').then(response =>
        {
            console.log(response.data);
            console.log('Le nom du pokemon est : '+response.data.name);
            this.statistiques = response.data.stats;
            console.log(this.statistiques);
            this.statistiques.forEach(unestatistique =>
            {
                console.log('Le nom est : '+unestatistique.stat.name);
                console.log('Qui a pour valeur : '+unestatistique.base_stat);
            });
            console.log('La stat defense vaut : '+this.statistiques[2].base_stat);
        });
    }
});