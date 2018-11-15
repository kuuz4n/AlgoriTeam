(function() {
    var assets = new Vue({
        el: '#assets',
        data: {
            la: null, 
            fa: null, 
            address: null, 
            year_ac: null,
            cond: null,
            price: null,
            houseandlot: []
        },
        created: function() {
            var self = this;
            axios.get('http://localhost:3000/api/admin')
                .then(function(res) {
                    self.houseandlot = res.data;
                })
                .catch(function(err) {
                    self.houseandlot = [];
                });   
        },
        methods: {}
    });
    console.log(assets);
})();