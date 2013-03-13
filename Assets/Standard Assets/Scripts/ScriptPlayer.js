#pragma strict

//Inspector Variables
var tagName 			: String;
var rayDistance 		: float = 0;
var score				: int = 0;
var gameTime			: float = 20; 	// amount of time the game will last
var loadWaitTime		: float = 3.0;	// amount of time to wait before we load the next scene
var numberOfPointsToWin	: int = 5;		// number of points required to win

//Private Variables

function Start () {
	InvokeRepeating("CountDown", 1.0, 1.0); // Repeat the countdown every second
}

function Update () {
	if (Input.GetMouseButtonDown(0)){
		//Debug.Log("Pressed left click.");
		var hit: RaycastHit;
		var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if (Physics.Raycast(ray, hit, rayDistance)) {
			if (hit.transform.tag == tagName) {
				//var position = Vector3(Random.Range(-6, 6), Random.Range(-4, 4),0);  // Moved to enemy script
				//hit.transform.position = position;								   // Moved to enemy script
				var enemyScript = hit.transform.GetComponent(ScriptEnemy);
				enemyScript.numberOfClicks--;
				if (enemyScript.numberOfClicks == 0){
					score += enemyScript.enemyPoint;
				}
			}
	    }
	    else {
	    	Debug.Log("Not an enemy");
	    }
	}

}

function CountDown() {
	if (--gameTime == 0) { 			// subtract from gameTime
		CancelInvoke("CountDown");	// Cancel the countdown
		if(score >= numberOfPointsToWin){
			Application.LoadLevel("sceneScreenWin");
		}
		else{
			Application.LoadLevel("sceneScreenLose");
		}
	}
}

function OnGUI () {
	GUI.Label(Rect(10,10,100,20),"Score: " + score);
	GUI.Label(Rect(10,25,100,35),"Time: " + gameTime);
}