import { createApp } from 'vue';

alert("Hallo Welt!");

const app = createApp({
    // component options
    data() {
        return {
            title: 'Racing Server',
            pagetext: 'Welcome to the racingserver!'
        }
    }
}).mount('div.main')

console.log(app.config)
