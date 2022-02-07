new Vue({
  el: '#app',
  data: {
    my: {
      name: "",
      shirtQuantity: null,
      shirtSize: null,
      shirtType: null,
      showAlert: false
    }
  },
  methods: {
    submitShirtForm() {
      const self = this;
      self.showAlert = true;


      const url = new URL(window.location);
      
      if (self.my.name) {
        url.searchParams.set('name', self.my.name);
      }
      if (self.my.shirtQuantity) {
        url.searchParams.set('qty', self.my.shirtQuantity);
      }
      if (self.my.shirtSize) {
        url.searchParams.set('shirtSize', self.my.shirtSize);
      }
      if (self.my.shirtType) {
        url.searchParams.set('shirtType', self.my.shirtType);
      }

      window.history.pushState({}, '', url);


    }
  },

  computed: {
    computedAlert() {
      const self = this;
      output = "";
      if (self.my.name) {
        output += `<strong>Hello ${self.my.name}</strong> `;
      }
      if (self.my.shirtQuantity) {
        output += `You want ${self.my.shirtQuantity} `;

        if (self.my.shirtSize) {
          output += self.my.shirtSize + " ";
        }
        if (self.my.shirtQuantity) {
          output += self.my.shirtQuantity + " ";
        }
        if (self.my.shirtType) {
          output += self.my.shirtType + " ";
        }
        output += "shirts.";
      }

      if (output && output != "") {
        return output;
      }
  
    }
  },

  mounted() {
    const self = this;
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);


    if (urlParams.get('name')) {
      self.my.name = urlParams.get('name');
    }

  }

  // mounted() {
  //   alert('hello');
  // }


});