#pragma strict

// Enemy Script

// Inspector Variables
var shapeColor		: Color[];		
var numberOfClicks 	: int = 2;
var respawnWaitTime : float = 2.0;
var explosion		: Transform;
var enemyPoint		: int = 1;
  

// Private Variables
private var clone		: Transform;
private var storedClicks: int = 0;

function Start() {
	 storedClicks = numberOfClicks;
	 var startPosition = Vector3(Random.Range(-6, 6), Random.Range(-4, 4),0);
	 transform.position = startPosition;
	 RandomColor();
}

// Update is called every frame
function Update () {
	if(numberOfClicks <= 0) {
	
		if (explosion) {
			clone = Instantiate(explosion, transform.position, transform.rotation); // create an explosion
			Destroy(clone.gameObject, explosion.particleSystem.duration);
		}
		var position = Vector3(Random.Range(-6, 6), Random.Range(-4, 4),0);
		RespawnWaitTime();
		transform.position = position;
		numberOfClicks = storedClicks;
	}
}

// RespawnWaitTime is used to hide a gameobject for a set amount of time and then unhide it
function RespawnWaitTime() {
	renderer.enabled = false;
	yield WaitForSeconds(respawnWaitTime);
	RandomColor();
	renderer.enabled = true;
}

// RandomColor is used to change out the material of a game object
function RandomColor() {
	if (shapeColor.length > 0) {
		var newColor = Random.Range(0,shapeColor.length-1);
		renderer.material.color = shapeColor[newColor];
	}
}
