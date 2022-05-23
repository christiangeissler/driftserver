import { createApp } from 'vue'

createApp({
    // component options
    data() {
        return {
            title: 'Racing Server',
            pagetext: 'Welcome to the racingserver!'
        }
    }
}).mount('#contentbox')