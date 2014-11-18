//THE CONTROLLER

var myApp = angular.module('myApp',[]);//Empty array b/c no dependancies needed yet

//LINKS ABOVE CONTROLLER TO NAMESPACE

myApp.controller('MyController',
function MyController($scope) {
$scope.developers = [
  {
    "name":"Melissa_Malpica",
    "gitname":"Mema82",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Kim_Kevin",
    "gitname":"kimkvn",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Alex_Soper",
    "gitname":"asoper29",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"David_Elmer",
    "gitname":"phillycc",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Ralp_Gerrena",
    "gitname":"RGcoders",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Nicholas_Hare",
    "gitname":"nhare",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Keith_Kreider",
    "gitname":"Kreider1997",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Ally_Hinton",
    "gitname":"Xx-Nova-xX",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Ariel_Gonzalez",
    "gitname":"AriGonzo",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Logan_Arnett",
    "gitname":"LoganArnett",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Fabi_Castillo",
    "gitname":"fab9",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Brian_Gates",
    "gitname":"bgates",
    "location":"orlando",
    "bio":" TIY Instructor"
  },
  {
    "name":"Jon_Manock",
    "gitname":"Jmancok",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"David_Rogers",
    "gitname":"al-the-x",
    "location":"orlando",
    "bio":" TIY Student"
  },
  {
    "name":"Carlos_Donze",
    "gitname":"theDonz",
    "location":"orlando",
    "bio":" TIY Student"
  }
]
});

//BE SURE TO REMEMBER TO LINK MODULE TO THE APP