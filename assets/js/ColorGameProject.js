var n=6;
var colors=[];
var goal;
var goalEl=document.querySelector("#goal");
var boxes=document.querySelectorAll(".square");
var res=document.querySelector("#reset");
reset();
// var eas=document.querySelector("#easy");
var mode=document.querySelectorAll(".mode");
for(var i=0;i<mode.length;i++)
{
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		(this.textContent=="EASY")?n=3:n=6;
		reset();
	});
}
/*eas.addEventListener("click",function(){
	if(n!=3)
		{for (var i = 3; i < boxes.length; i++)
			{
				boxes[i].style.display="none";
			}
			eas.classList.toggle("selected");
			har.classList.toggle("selected");
			n=3;
			reset();}
		});
var har=document.querySelector("#hard");
har.addEventListener("click",function(){
	if(n!=6)
	{
		eas.classList.toggle("selected");
		har.classList.toggle("selected");
		for (var i = 3; i < boxes.length; i++)
			{
				boxes[i].style.display="block";
			}
		n=6;
		reset();}
	});*/
res.addEventListener("click",reset);
function assignToBoxes()
{
	for (var i = 0; i < boxes.length; i++) {
		if(colors[i])/*agar easy hai toh colors ka size 3 hai but boxes ka toh 6, toh last ke teen index ke liye ye if true nhi hoga isliye else se unka display hum none kardenge*/
		{	boxes[i].style.display="block";
			boxes[i].style.backgroundColor=colors[i];}
			else{
				boxes[i].style.display="none";
			}
		boxes[i].addEventListener("click",function(){
			if(this.style.backgroundColor!=goal)
			{
				this.style.backgroundColor="#232323";
				document.querySelector("#message").textContent="Try Again!";
			}
			else{

				for (var i = 0; i < colors.length; i++)
				{
					document.querySelector("#message").textContent="Correct!";
					res.textContent="PLAY AGAIN?";
					boxes[i].style.backgroundColor=goal;
					document.querySelector("h1").style.backgroundColor=goal;
				}
			}
		});
	}
}
function generateColorsArray(n)
{
	var arr=[];
	for(i=0;i<n;i++)
	{
		var r=Math.floor(Math.random()*255);
		var g=Math.floor(Math.random()*255);
		var b=Math.floor(Math.random()*255);
		arr[i]="rgb("+r+", "+g+", "+b+")";
	}
	return arr;
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function reset()
{
	res.textContent="NEW COLORS";
	document.querySelector("h1").style.backgroundColor="steelblue";
	document.querySelector("#message").textContent="";
	colors=generateColorsArray(n);
	assignToBoxes();
	goal=pickColor();
	goalEl.textContent=goal;
}