(function() {
    var assets = new Vue({
        el: '#assets',
        data: {
            h_id: null, 
            la: null, 
            fa: null, 
            address: null, 
            year_ac: null,
            cond: null,
            price: null,
            //h_link: null,
            houseandlot: []
        },
        created: function() {
            var self = this;
            axios.get('http://localhost:3000/api/admin')
                .then(function(res) {
                    self.houseandlot = res.data;
                    //self.h_link = '../api/admin/';
                })
                .catch(function(err) {
                    self.houseandlot = [];
                });   
        },
        methods: {
            editHnl: function(hx) {
                var self = this;
                /* var payload = {
                    h_id: hx.h_id
                };
                axios.post('/getforedit', payload)
                  .then(function(res) {
                    /* self.houseandlot = res.data;
                    self.clear(); 
                  })
                  .catch(function(err) {
                });*/
                axios.get('http://localhost:3000/getforedit/' + hx.h_id);
                window.location.href = 'http://localhost:3000/getforedit';
            },
            delHnl: function(hx) {
                var self = this;
                axios.delete('http://localhost:3000/api/admin/' + hx.h_id);
                window.location.href = 'http://localhost:3000/admin';
            }
        }
    });
    console.log(assets);
})();