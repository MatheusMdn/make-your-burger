const myNameApp = {
  data() {
    return {
      name: "",
      idade: 19,
      input_name: "",
    };
  },
  methods: {
    submiForm(e) {
      e.preventDefault();
      console.log(this.input_name);
      this.name = this.input_name;
    },
  },
};

Vue.createApp(myNameApp).mount("#app");
