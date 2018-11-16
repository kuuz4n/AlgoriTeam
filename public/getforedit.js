(function() {
    var editHnl = new Vue({
        el: '#editHnl',
        data: {
            h_id: null, 
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
            axios.get('http://localhost:3000/api/getforedit')
                .then(function(res) {
                    self.houseandlot = res.data;
                })
                .catch(function(err) {
                    self.houseandlot = [];
                });   
        },
        methods: {
            update: function(){
                var self = this;
                var payload = {
                    h_id: req.body.h_id,
                    la: req.body.la,
                    fa: req.body.fa,
                    address: req.body.address,
                    year_ac: req.body.year_ac,
                    cond: req.body.cond,
                    price: req.body.price
                };
                axios.post('/edit', payload)
                  .then(function(res) {
                    self.houseandlot = res.data;
                    self.clear();
                  })
                  .catch(function(err) {
                });
              }
        }
    });
    console.log(editHnl);
})();