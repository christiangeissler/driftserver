import { createApp } from 'vue'

const app = createApp({
    // component options
    data() {
        return {
            title: 'Racing Server',
            pagetext: 'Welcome to the racingserver!'
        }
    }
}).mount('div.contentbox')

console.log(app.config)