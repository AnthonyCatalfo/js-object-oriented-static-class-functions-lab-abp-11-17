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
    return this._All
  }

  static Find(id){
    return this.All()[id-1]

    }
  }

Question._All = [];
