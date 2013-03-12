#pragma strict

//Inspector Variables
var tagName : String;
var rayDistance : float = 0;

//Private Variables

function Start () {

}

function Update () {
	if (Input.GetMouseButtonDown(0)){
		//Debug.Log("Pressed left click.");
		var hit: RaycastHit;
		var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if (Physics.Raycast(ray, hit, rayDistance)) {
			if (hit.transform.tag == tagName) {
				var position = Vector3(Random.Range(-6, 6), Random.Range(-4, 4),0);
				hit.transform.position = position;
			}
	    }
	    else {
	    	Debug.Log("Not an enemy");
	    }
	}

}