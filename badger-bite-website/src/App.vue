<template>
  <div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import footerComponent from './components/footerComponent'

  export default {
    name: 'App',
    components: {
      footerComponent
    }
  }

</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Work+Sans:400,300,700|Open+Sans:400italic,300italic);
@font-face {
  font-family: trench100;
  src: url('/src/assets/trench100free.otf');
}

/* importing local fonts dowloaded from the internet */

@font-face {
  font-family: absoluteXero;
  src: url('/src/assets/Absolute Xero.otf');
}

/* setting the background for the whole page */

html {
  position: relative;
  height: 100%;
  margin-top: 0;
}

body {
  height: 100%;
  margin: 0;
  margin-bottom: -12vmin;
  /* Equivalent to footer's height */
  padding-bottom: -12vmin;
  /* Equivalent to footer's height */
  background: black;
  /* background: radial-gradient(#B8BEB4, #71685F); */
  /* background: radial-gradient(black, #71685F); */
  background-size: cover;
}

.wrapper {
  min-height: 100%;
  margin-bottom: -12vmin;
}

.push {
  height: 12vmin;
}

</style>
