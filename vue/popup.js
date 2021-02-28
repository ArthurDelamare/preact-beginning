var app = new Vue({
  el: '#app',
  data: {
    message: 'Canal+ Party',
    home: true,
    lobby: false
  },
  methods: {
    createLobby: function () {
      this.home = false;
      this.lobby = true;
    },
    copyLink: function() {
      const copyText = document.querySelector("#link");
      copyText.select();
      document.execCommand("copy");
    }
  }
})