(function() {
    var addHnl = new Vue({
        el: '#addHnl',
        data: {
            la: null, 
            fa: null, 
            address: null, 
            year_ac: null,
            cond: null,
            price: null,
            houseandlot: []
        },
        created: function() { },
        methods: {
            saveHnl: function(){
                var self = this;
                var payload = {
                    la: req.body.la,
                    fa: req.body.fa,
                    address: req.body.address,
                    year_ac: req.body.year_ac,
                    cond: req.body.cond,
                    price: req.body.price
                };
                axios.post('/add', payload)
                  .then(function(res) {
                    self.houseandlot = res.data;
                    self.clear();
                  })
                  .catch(function(err) {
                });
              }
        }
    });
    console.log(addHnl);
})();