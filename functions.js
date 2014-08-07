function Lands(landName, landValue){
    this.landName = landName;
    this.landValue = landValue;
    this.magicCrops = function(skills){
      if (skills.wage > 4500){
        $(".message1").text("you can plant magic corn")
      }
    else if (skills.wage >2500 && skills.wage <4500){
        $(".message1").text("you can plant semi-magic mushrooms")
      }
    else {
      $(".message1").text("You need a better job to affort to plant any magic crops here.")
    }

  };

}

function Gnome(name, height, age){
  this.name = name;
  this.height = height;
  this.age = age;
  this.socialStatus = function(lands, height){
    var tempValue = lands.landValue + this.height;
    if(tempValue > 3030){
      $(".message2").text("Excellent, your height in this land qualifies you as royalty, Sir " + name + ".")
      this.name = "Sir " + name;
    }
  else {
    $(".message2").text("Sorry shorty, you are a peasant in this land. Get to work " + name + "!")
  }
};
}


function Skills(job,wage){
    this.job = job;
    this.wage = wage;
    this.health = function(wage,lands) {

    var tempHealth = this.wage * lands.landValue;
    if (tempHealth > 5000 ){
      console.log("You are a very healthy gnome.")
    }
  else{
    console.log('Uh oh, you are not a healthy gnome.')
  }
};
}



var bob = new Gnome("Bob",36, 104);
var farmer = new Skills('farmer', 5550);
var greenLand = new Lands('GreenLand',3000);

var doug = new Gnome("Doug", 29, 118);
var cropDuster = new Skills("crop duster",3000);
var blueVille = new Lands("BlueVille", 4500);

var steve = new Gnome("Steve",18, 123);
var pigBreeder = new Skills("pig breeder",2550);
var rubyLane = new Lands ("RubyLane",2500);

var chip = new Gnome("Chip", 32, 98);
var villageIdiot = new Skills("villageIdiot",99);
var sulpherTown = new Lands("SulpherTown", 100);

// var GoldenEggPolisher = new Skills("eggPolisher",5000);
// GoldenEggPolisher.wage;
//
//
// var EmeraldIsland = new Lands("EmeraldIsland",2500);
// EmeraldIsland.magicCrops(5000);
//
// Bob.town(EmeraldIsland, this.height);
