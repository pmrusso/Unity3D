#pragma strict
// Win Screen Script

//var buttonSize : float = 50;


function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.Label (Rect(10,10,100,40), "YOU WIN!!!!");

	if (GUI.Button(Rect(10,60,90,50), "Start Game")) {
		Application.LoadLevel("sceneLevelOne");
	}
	
	if (GUI.Button(Rect(10,130,90,50), "Exit Game")){
		Application.Quit();
	}
}
