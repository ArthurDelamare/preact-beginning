var app = new Vue({
  el: '#app',
  data: {
    title: 'MyParty pour Canal+',
    users: [],
    home: true,
    lobby: false,
    join: false,
  },
  methods: {
    createLobby: function() {
      this.home = false;
      this.join = false;
      this.lobby = true;
    },
    joinLobby: function() {
      this.home = false;
      this.join = true;
      this.lobby = false;
    },
    tryConnect: function() {
      this.home = false;
      this.join = false;
      this.lobby = true;
    },
    copyLink: function() {
      const copyText = document.querySelector("#link");
      copyText.select();
      document.execCommand("copy");
    }
  }
})