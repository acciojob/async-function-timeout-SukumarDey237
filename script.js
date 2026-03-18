//your JS code here. If required.
let btn = document.getElementById("btn")
let output = document.getElementById("output")

async function print(){
let text = document.getElementById("text").value
let delay = document.getElementById("delay").value

	await  new Promise((res,rej) => setTimeout(res, Number(delay)))
	console.clear()
	console.log(text,delay)
	output.textContent = text
}

btn.addEventListener("click",print)