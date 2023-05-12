/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function preload() {
  treeModel = loadAsset("albero.glb");
}

  function setup() {
    createCanvas3D(windowWidth, windowHeight);
    //Change background color of the scene
    background3D("#FFFFFA");
    var albero = beginGroup();
    diffuse("#a3b18a")
    //Create a sphere in 0, 0, 0 with radius 1
    cone(0, 4, 0, 1,5);
    diffuse("#edf6f9")
    box(0,0,0,100,0.1,100)
    
  environment();
    
    
    diffuse("#ca6702");
    align(TOP)
    cone(0,0,0,0.5,5);
     
    endGroup();
    var lato=20;
    var numeroalberi = 30
    
    for(var i=0; i<numeroalberi; i++)
      {
        var x=random(-lato, lato);
        var y=0;
        var z=random(-lato,lato);
        
        clone(albero, x, y, z)
        var nuovoalbero = clone(albero, x, y, z)
        nuovoalbero.setScale(random(1,2))
      }
   
  }
  


function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}
