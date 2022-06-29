const RootComponent = {
  data() {
    return {
      numeroDeCarte: "",
      cvc: "",
      dateExpiration: "",
    };
  },
  computed: {
    verifCb: function () {
      if (String(this.numeroDeCarte).length == 16) {
        return "bordureVerte";
      } else {
        return "bordureRouge";
      }
    },
    verifCvc: function () {
      if (String(this.cvc).length == 3) {
        return "bordureVerte";
      } else {
        return "bordureRouge";
      }
    },
    verifDate: function() {
        if
    }
  },
};
const Root = Vue.createApp(RootComponent);
const vm = Root.mount(`#root`);
