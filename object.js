var user = {
    firstName: "Вася",
    surname: "Петров"
    }
    
    Object.defineProperty(user, "fullName", {
    
        get: function() {
         return this.firstName + ' ' + this.surname;
        },
    
        set: function(value) {
          var split = value.split(' ');
         this.firstName = split[0];
          this.surname = split[1];
    }
       });
    
    user.fullName = "Петя Иванов";
    console.log( user.firstName ); // Петя
    console.log( user.surname ); // Иванов