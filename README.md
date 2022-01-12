# s3frontend

## Application summary

### This application is a webapp to check several SMITE statistics. You can enter a playername and find stats such as:
- General user information
- User Clan
- Hours played (ingame)
- KDA per god
- Worshippers per god
- Winrate per god

### This application also allows for the creation of tournaments. You can sign on for a tournament and create them. They can also be deleted by admins although this project currently does not have any roles added.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Development:

- The development branch contains the frontend for the application

### Information about the techniques used in the project

- This frontend uses Vue `vue 3.0.0`
- Dependencies:
1. "@popperjs/core": "^2.11.0",
2. "axios": "^0.22.0",
3. "bootstrap": "^5.1.3",
4. "bootstrap-vue": "^2.21.2",
5. "chart.js": "^2.9.4",
6. "core-js": "^3.6.5",
7. "vue": "^3.0.0",
8. "vue-chartjs": "^3.5.1",
9. "vue-router": "^4.0.12"

### Quality Assurance

- #### unit testing is done using Vue Test Utilities and can be found in the tests/unit folders

### Run Unittests
```
npm run test:unit
```

### Links to other parts of this application
- Smite external API connection : https://github.com/Pepsicle/s3backend
- Login/Tournament backend: https://github.com/Pepsicle/s3loginbackend
