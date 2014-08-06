function Lands(landName, landValue){
    this.landName = landName;
    this.landValue = landValue;
    this.magicCrops = function(skills){
      if (skills.wage > 4500){
        console.log("you can plant magic corn")
      }
    else if (skills.wage >2500 && skills.wage <4500){
        console.log("you can plant semi-magic mushrooms")
      }
    else {
      console.log("you need higher wages to plant any magic crops")
    }

  };

}

function Gnome(name, height, age){
  this.name = name;
  this.height = height;
  this.age = age;
  this.town = function(lands, height){
    var tempValue = lands.landValue + this.height;
    if(tempValue > 100){
      console.log("welcome to the Land of Tall Gnomes")
      this.name = "Sir " + name;
    }
  else {
    console.log("you need to grow in order to live in this land")
  }
};
}


function Skills(job,wage){
    this.job = job;
    this.wage = wage;
    this.health = function(wage,lands) {

    var tempHealth = this.wage * lands.landValue;
    if (tempHealth > 5000 ){
      console.log("you are a very healthy gnome.")
    }
  else{
    console.log('uh oh, you are not a healthy gnome.')
  }
};
}



var Bob = new Gnome("bob",36, 104);


var GoldenEggPolisher = new Skills("eggPolisher",5000);
GoldenEggPolisher.wage;


var EmeraldIsland = new Lands("EmeraldIsland",2500);
EmeraldIsland.magicCrops(5000);

Bob.town(EmeraldIsland, this.height);
