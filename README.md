# Vue-local

> Manage localstorage from the browser 

_**Beta 1.0**_

### Install _(Not available yet)_
Using **npm:**
```bash
$ npm install --save vue-local
```

Using **yarn:**
```bash
$ yarn add vue-local
```

Import
```js
import Vue from 'vue'
import Vuelocal from 'vue-local'
 
Vue.use(Vuelocal);

...
```

### Usage

This is a project for [vue 2](https://github.com/vuejs).

```html
<div v-local:set.message="'I am a message'"></div>
<div v-local:set.saldo="'Hola como estas'"></div>
<div v-local:get="message"></div>
<div v-local:get="saldo"></div>
```
The rendered elements look like this:

[![CURRENTLY RECORDING](https://raw.githubusercontent.com/juliandavidmr/vue-local/master/docs/screen.png)](https://github.com/juliandavidmr/vue-local)


### Development

|Command|Description|
|---|---|
|npm run build|Build|
|npm run dev|Open browser dev|

[**Contributing**](./CONTRIBUTING.md)

### License

MIT [@juliandavidmr](https://github.com/juliandavidmr)