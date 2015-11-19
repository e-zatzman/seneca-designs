var italy_canvas = document.getElementById("italy");
var italy_stage = italy_canvas.getContext("2d");

var france_canvas = document.getElementById("france");
var france_stage = france_canvas.getContext("2d");

var germany_canvas = document.getElementById("germany");
var germany_stage = germany_canvas.getContext("2d");

var poland_canvas = document.getElementById("poland");
var poland_stage = poland_canvas.getContext("2d");


italy_stage.fillStyle = "green";
italy_stage.strokeRect(0, 0, 300, 150);
italy_stage.fillRect(0, 0, 100, 150);
italy_stage.fillStyle = "firebrick";
italy_stage.fillRect(200, 0, 100, 150);

france_stage.strokeRect(0, 0, 300, 150);
france_stage.fillStyle = "firebrick";
france_stage.fillRect(0, 0, 100, 150);
france_stage.fillStyle = "darkblue";
france_stage.fillRect(200, 0, 100, 150);

germany_stage.strokeRect(0, 0, 300, 150);
germany_stage.fillRect(0, 0, 300, 50);
germany_stage.fillStyle = "firebrick";
germany_stage.fillRect(0, 50, 300, 50);
germany_stage.fillStyle = "#FFCC00";
germany_stage.fillRect(0, 100, 300, 50);

poland_stage.strokeRect(0, 0, 300, 150);
poland_stage.fillStyle = "firebrick";
poland_stage.fillRect(0, 75, 300, 75);


