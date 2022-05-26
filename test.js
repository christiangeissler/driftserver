import { createApp } from 'vue';

alert("Hallo Welt!");

createApp({
    // component options
    data() {
        return {
            title: 'Racing Server',
            pagetext: 'Welcome to the racingserver!'
        }
    }
}).mount('#main')