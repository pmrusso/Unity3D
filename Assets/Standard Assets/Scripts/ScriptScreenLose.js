#pragma strict
// Lose Screen Script

//var buttonSize : float = 50;


function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.Label (Rect(10,10,100,40), "YOU LOSE!!!!");

	if (GUI.Button(Rect(10,60,100,50), "Restart Game")) {
		Application.LoadLevel("sceneLevelOne");
	}
	
	if (GUI.Button(Rect(10,130,100,50), "Exit Game")){
		Application.Quit();
	}
}