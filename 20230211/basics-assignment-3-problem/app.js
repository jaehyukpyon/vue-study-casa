const app = Vue.createApp({
  data() {
    return {
      number: 0,

    }
  },
  computed: {
    result() { // result computed property which depends on our number data property and Vue detects this dependency and will only recalculate and reevaluate 'result' whenever number changes.
      if (this.number < 37) {
        return 'Not there yet!';
      } else if (this.number === 37) {
        return this.number;
      } else {
        return'Too much!';
      }
    },
  },
  watch: {
    result() { // whenever result changes (whenever result has NEW value), 'NOT' whenever result is evaluated.
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
  methods: {
    addNumber(num) {
      this.number = this.number + num;
    }
  },
});

app.mount('#assignment');