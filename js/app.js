const { createApp } = Vue

createApp({
    data() {
        return {
            profiles: [
                { 
                    profilePhoto: './img/avatar_1.jpg',
                    name: 'Michele',
                    lastAccess: 'Lorem ipsum dolor sit amet',
                    messageArriveHour: '16:15' 
                },
                { 
                    profilePhoto: './img/avatar_2.jpg',
                    name: 'Fabio',
                    lastAccess: 'Lorem ipsum dolor sit amet',
                    messageArriveHour: '16:05'
                },
                { 
                    profilePhoto: './img/avatar_3.jpg',
                    name: 'Samuele',
                    lastAccess: 'Lorem ipsum dolor sit amet',
                    messageArriveHour: '16:03'
                },
                { 
                    profilePhoto: './img/avatar_4.jpg',
                    name: 'Alessandro B.',
                    lastAccess: 'Lorem ipsum dolor sit amet',
                    messageArriveHour: '15:50'
                },
                { 
                    profilePhoto: './img/avatar_5.jpg',
                    name: 'Alessandro L.',
                    lastAccess: 'Lorem ipsum dolor sit amet',
                    messageArriveHour: '15:45'
                },
                { 
                    profilePhoto: './img/avatar_6.jpg',
                    name: 'Claudia',
                    lastAccess: 'Lorem ipsum dolor sit amet',
                    messageArriveHour: '15:40'
                },
                { 
                    profilePhoto: './img/avatar_7.jpg',
                    name: 'Federico',
                    lastAccess: 'Lorem ipsum dolor sit amet',
                    messageArriveHour: '15:22'
                },
                { 
                    profilePhoto: './img/avatar_8.jpg',
                    name: 'Davide',
                    lastAccess: 'Lorem ipsum dolor sit amet',
                    messageArriveHour: '15:15'
                }
            ]
             
        }
    },
    
}).mount('#app')