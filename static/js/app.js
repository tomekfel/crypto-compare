let CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";
let COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";
let CRYPTOCOMPARE_IMG_URI = "https://www.cryptocompare.com";

let UPDATE_INTERVAL = 60 * 1000;

let app = new Vue({
    el: "#app",
    data: {
        coins: [],
        coinData: {}
    },
    methods: {
        getCoinData: function() {
            let self = this;
            axios.get(CRYPTOCOMPARE_API_URI + "/data/all/coinlist")
                .then((resp) => {
                    this.coinData = resp.data.Data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        getCoins: function() {
            let self = this;
            axios.get(COINMARKETCAP_API_URI + "/v1/ticker/?limit=10")
                .then((resp) => {
                    this.coins = resp.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        getCoinImage: function(symbol) {
            try {
                console.log(CRYPTOCOMPARE_IMG_URI + this.coinData[symbol].ImageUrl);
                return CRYPTOCOMPARE_IMG_URI + this.coinData[symbol].ImageUrl;
            } catch (err) {
                console.log(err);
            }
        }
    },
    created: function() {
        this.getCoinData();
    }
});