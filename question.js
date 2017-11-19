'use strict';
class Question  {
  constructor(question){
    this.question = question

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
Question._All = []
