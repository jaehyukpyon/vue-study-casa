const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
        };
    },

    methods: {
        add (num) {
            this.counter += num;
        },
        reduce (num) {
            this.counter -= num;
        },
        setName (event, name) {
            this.name = event.target.value + ' ' + name;
        }
    }
});

app.mount('#events');
