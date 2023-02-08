Vue.createApp({

    data() {
        return {
            userInput: '',
            confirmedInput: '',
        }
    },

    methods: {
        showAlert() {
            alert('This works!');
        },

        saveInput(event) {
            this.userInput = event.target.value;
        },

        confirmInput() {
            this.confirmedInput = this.userInput;
        }
    },

}).mount('#assignment');