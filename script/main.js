/*new Vue({
    el: '#app',
    data:{
       formData:{
          firstname:"Andrey",
          lastname:"Fedorovich",
          url:"vue-learn.loc",
          badge:"<div class='alert alert-info' role='alert'>This is a info alert—check it out!</div>",
          techno:"Angular.js,React.js,Vue.js"
       },
       showDetails:false
    },
   computed:{
      fullname: function(){
        return this.formData.firstname+' '+this.formData.lastname;
      },
      mytechnologies:function(){
         return this.formData.techno.split(",");
      }
   },
   methods:{
      submited: function(){
         this.showDetails=true;
      }
   }
});*/

new Vue({
  el: "#app",
  data:{
    formData:{
      firstname: "Jake",
      lastname: "the Dog",
      url: "http://www.adventure-time.loc",
      badge: "",
      technologies: ""
    },
    showDetails:false
  },
  computed:{
    fullname: function(){
      return this.formData.firstname + " " + this.formData.lastname;
    },
    mytechnologies:function(){
       return this.formData.technologies.split(",");
    }
  }
  // ,
  // methods: {
  //       // методы жизненного цикла
  //       beforeCreate: function(){
  //         console.log("beforeCreate");
  //       },
  //       created: function(){},
  //       beforeMount: function(){},
  //       mounted: function(){},
  //       beforeUpdate: function(){},
  //       updated: function(){},
  //       beforeDestroy: function(){},
  //       destroyed: function(){},
  //
  //       customMethodsAlso: function(){
  //           //здесь у нас тоже есть доступ к data
  //       }
  //   }

});


// регистрация
Vue.component('my-component', {
  template: '<div>Пользовательский компонент!</div>'
})
