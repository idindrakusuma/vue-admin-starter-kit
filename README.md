# Vue Admin Starter Kit

This starter kit was included,
- Vuetify.
- axios global mode and instance mode.
- Vuex Setup modules mode.
- ESlint.

## How to run?
- `Clone` this repo to your local machine
- run `npm install`. Make sure your node version is more than 8 (8.x.x)
- rename `src/common/env.js.example` to `src/common/env.js`
- then, `npm run dev`
- open the browser and insert `localhost:8080` to your address bar.
- Cheers!

### Faq :question:

### How to change theme? :arrows_counterclockwise:

- open the `src/main.js` then change the code
```js
Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.base, // you cant change to hexa like #fffggg
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {
      },
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: '',
    }
  }
});
```
- And many more..


---
This template was originaly from Michael Wang - https://github.com/tookit/vue-material-admin