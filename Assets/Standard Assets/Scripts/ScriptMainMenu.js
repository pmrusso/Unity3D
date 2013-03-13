#pragma strict
// Main Menu Script

//var buttonSize : float = 50;


function Start () {

}

function Update () {

}

function OnGUI () {
	if (GUI.Button(Rect(10,10,90,50), "Start Game")) {
		Application.LoadLevel("sceneLevelOne");
	}
	
	if (GUI.Button(Rect(10,70,90,50), "Exit Game")){
		Application.Quit();
	}
}
