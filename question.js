'use strict';
class Question  {
  constructor(name, email){
    this.name = name
    this.email = email
    this.save()
  }

  save(){
    this.constructor._All.push(this)
  }

  static All() {
    return this._All;
  }

  static FindByEmail(email){
    return this.All().filter(function(user){
      return user.email === email;
    })
  }
}
User._All = []

let sarah = new User("Sarah", "sarah@flatironschool.com")
let bob = new User("Bob", "bob@flatironschool.com")

let matchingUser = User.FindByEmail("sarah@flatironschool.com")
