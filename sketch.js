const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;

function setup(){
    var canvas = createCanvas(windowWidth/2, windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    //let canvasMouse = Mouse.create(canvas.elt);
    //canvasMouse.pixelRatio = pixelDensity();
    //let options = {
      //  mouse: canvasMouse
    //}
    //mConstraint = MouseConstraint.create(engine, options);
    //World.add(world, mConstraint);
    
    bob1 = new Pendulum(200, 600, "black");
    bob2 = new Pendulum(250, 600, "black");
    bob3 = new Pendulum(300, 600, "black");
    bob4 = new Pendulum(350, 600, "black");
    bob5 = new Pendulum(400, 600, "black");

    sling1 = new Sling(bob1, 400);
    sling2 = new Sling(bob2, 400);
    sling3 = new Sling(bob3, 400);
    sling4 = new Sling(bob4, 400);
    sling5 = new Sling(bob5, 400);



}

function draw(){
    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();



}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}