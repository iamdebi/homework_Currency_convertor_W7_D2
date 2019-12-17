import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  console.log("JaveScript Loaded");
  new Vue({
    el: "#app",
    data: {
      rates: {},
      selectedCurrency: ""
    },
    mounted() {
      this.fetchExchangeRates();
    },

    computed: {
      filterCurrencies: function() {
        let foundCurrency = [];

        for (let [currency, rate] of Object.entries(this.rates)) {
          foundCurrency.push({ key: currency, value: rate });
        }

        return foundCurrency.filter(currency => {
          return currency.key === this.selectedCurrency;
        });
      },

      currencyToEur: function() {
        let founcToEur = [];

        for (let [currency, rateEurToCurreny] of Object.entries(this.rates)) {
          rate = 1 / rateEurToCurreny;
          foundCurrency.push({
            key: currency,
            value: rate
          });
        }

        return foundCurrency.filter(currency => {
          return currency.key === this.selectedCurrency;
        });
      }
    },

    methods: {
      fetchExchangeRates: function() {
        const request = fetch("https://api.exchangeratesapi.io/latest")
          .then(response => response.json())
          .then(currency => {
            this.rates = currency.rates;
          });
      }
    }
  });
});
