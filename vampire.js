class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this
    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.

 //decide if direct decendent
 isDirectDescendent (vampire) { 
  return this.creator && (this.creator === vampire || this.creator.isDirectDescendent(vampire));
}

closestCommonAncestor(vampire) {
  if (this == vampire) {
    return this
  }
  let elder;
  let younger;
  let commonAncestor;
  //decide who is elder
  if (this.isMoreSeniorThan(vampire)) {
    elder = this;
    younger = vampire;
  } else {
    elder = vampire;
    younger = this;
  };
   
  //base case
  if (elder.creator == null) {
    commonAncestor = elder;
  } else if (younger.isDirectDescendent(elder)) {
    commonAncestor = elder;
  } else {commonAncestor = elder.creator.closestCommonAncestor(younger)}
  return commonAncestor;
}



  //   let difference = this.numberOfVampiresFromOriginal - vampire.numberOfVampiresFromOriginal;
    
  //   let commonAncestor;
  //   let currentAncestor1 = this.creator;
  //   let currentAncestor2 = vampire.creator

  //   if (difference > 0) {
     
  //     for (let i = 1; i <= difference; i++) {
  //       if (currentAncestor1 === vampire) {
  //         commonAncestor = vampire;
  //         break;
  //       } else if (currentAncestor1.creator === currentAncestor2.creator){
  //         commonAncestor = currentAncestor1.creator;
  //         break;
  //       } 
  //       else {
  //         currentAncestor1 = currentAncestor1.creator;
  //       };
  //     }
  //   } else if (difference < 0) {
      
  //     for (let i = 1; i <= (-difference); i++) {
  //       if (currentAncestor2 = this) {
  //         commonAncestor = this;
  //         break;
  //       } else if (currentAncestor1.creator ===           currentAncestor2.creator){
  //         commonAncestor = currentAncestor2.creator;
  //         break;
  //       } 
  //       else {
  //         currentAncestor2 = currentAncestor2.creator;
  //       };
  //     }
  //   }
  //   while(!currentAncestor1.creator) {
  //     if(currentAncestor1.creator === currentAncestor2.creator){
  //       commonAncestor = vampire.creator;
  //       break
  //     } 
  //     else {
  //       currentAncestor1 = currentAncestor1.creator;
  //       currentAncestor2 = currentAncestor2.creator
  //     }
  //   }
  //   return commonAncestor;
  // }
}
module.exports = Vampire;

