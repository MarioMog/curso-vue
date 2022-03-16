const app = Vue.createApp({
  data() {
    return {
      count: 0,
      valueIs: "positive",
      step: 1,
    };
  },
  methods: {
    modCount(ins = "add") {
      if (ins == "add") this.count += this.step;
      else this.count -= this.step;
    },
  },
  watch: {
    // whenever question changes, this function will run
    count() {
      this.valueIs = this.count < 0 ? "negative" : "positive";
    },
  },
});
const mountApp = app.mount("#app");
