<template>

  <div>
    <footer class="footer">
      <h1>Inside Footer</h1>
      <div v-if="!phoneClick && !emailClick">
        <div class="social-media-buttons">
          <div class="social-media-button facebook">
            <a href="#yourFBUrlGoesHere">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
          </div>
          <div class="social-media-button instagram">
            <a href="#yourInstagramUrlGoesHere">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <div class="social-media-button envelope">
            <a v-on:click="emailPopulate" id="email">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
          <div class="social-media-button phone">
            <div>
              <a v-on:click="phonePopulate">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="phoneClick">
        <div class="footerInfo">{{phone}}</div>
        <button @click="toggleButtons" type="button" class="btn btn-light footerToggleBtn">
          Toggle Back
        </button>
      </div>
      <div v-if="emailClick">
        <div class="footerInfo">{{email}}</div>
        <button @click="toggleButtons" type="button" class="btn btn-light footerToggleBtn">
          Toggle Back
        </button>
      </div>
    </footer>
  </div>

</template>

<script>
  // import HelloWorld from './components/HelloWorld'

  export default {
    data() {
      return {
        phone: '123-456-7891',
        email: 'someemail@email.com',
        phoneClick: false,
        emailClick: false
      }
    },
    methods: {
      phonePopulate: function () {
        this.phoneClick = true
      },

      emailPopulate: function () {
        this.emailClick = true
      },
      toggleButtons: function () {
        this.phoneClick = false
        this.emailClick = false
      }
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

  .footer {
    left: 0;
    right: 0;
    padding-top: 15vmin;
    height: 12vmin;
    text-align: center;
    font-family: trench100, sans-serif;
  }

  .footerInfo {
    font-size: 4vmin;
    color: whitesmoke;
    margin-top: 3vmin;
  }

  .footerToggleBtn {
    font-size: 3vmin;
    font-weight: 800;
    color: rgb(47, 241, 193);
    margin-bottom: 5vmin;
  }

  /* social media styles on footer */

  .social-media-buttons {
    text-align: center;
  }

  .social-media-button {
    display: inline-block;
    width: 8vmin;
    height: 8vmin;
    border: 2px solid #fff;
    border-radius: 100%;
    position: relative;
    margin-left: 6vmin;
    margin-top: 2vmin;
    cursor: pointer;
    transition: border-radius .25s, transform .5s, border-color 1s;
  }

  .social-media-button i {
    color: #fff;
    font-size: 4vmin;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: color .5s;
  }

  .social-media-button:hover {
    border-radius: 10%;
    border-color: rgb(70, 70, 70);
    transform: rotate(360deg);
  }

  .social-media-button.facebook:hover i {
    color: #3b5998;
  }

  .social-media-button.instagram:hover i {
    color: #e7c944;
  }

  .social-media-button.envelope:hover i {
    color: #6e5494;
  }

  .social-media-button.phone:hover i {
    color: #18dd32;
  }

</style>
