const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: '',
        };
    },

    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm(event) {
            //event.preventDefault(); // default js function.
            alert('Submitted!');
        },
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        },
        setName(event, name) {
            this.name = event.target.value + ' ' + name;
        }
    }
});

app.mount('#events');
