function write(text) {
	const p = document.createElement("p")
	p.textContent = text
	document.body.appendChild(p)
}

function header(text) {
	const parentElement = document.getElementById("container")
	const h3 = document.createElement("h3")
	h3.textContent = text
	document.body.appendChild(h3)
}

header("getting started")
write("have these 2 scripts in your head:")
write("<script src='https://code.jquery.com/jquery-3.6.0.min.js'></script>")
write("<script src='script.js' defer></script>")
write("since the main script is already deferred, meaning the DOM is loaded before the script, no need for $(document).ready(function(){})")

header("getting elements")
write("$(\"#menu\")")
write("$(\"p\")")
write("$(\".post\")")
write("$(\"p.post\") == document.querySelectorAll(\"p.post\")")
write("$(\"#p1\").text(\"Hello World!\")")
write("$(\"#p1\").text()")
write("$(\"#d1\").html(\"<p>Hello World</p>\")")
write("$(\"#d1\").html()")
write("$(\"#p1\").css(\"color\", \"blue\")")

header("events")
write("$(document).ready()")
write("$(document).ready(function(){})")

header("events/click")
write("$(\"p\").click(function() {")
write(".__$(this).css(\"color\", \"red\")")
write("})")
write("")

header("events/dbclick")
write("$(\"p\").dbclick(function() {")
write(".__$(this).css(\"color\", \"red\")")
write("})")
write("")

header("events/mouseenter")
write("$(\"p\").mouseenter(function() {")
write(".__$(this).text(\"Hello World!\")")
write("})")
write("")

header("events/mouseleave")
write("$(\"p\").mouseleave(function() {")
write(".__$(this).text(\"Bye world\")")
write("})")
write("")

header("events/mousedown")
write("$(\"p\").mousedown(function() {")
write(".__$(this).text(\"Mouse down!\")")
write("})")
write("")

header("events/mouseup")
write("$(\"p\").mouseup(function() {")
write(".__$(this).text(\"Mouse up!\")")
write("})")
write("")

header("events/hover")
write("$(\"p\").hover(function() {")
write(".__$(this).text(\"Mouse up!\")")
write("}, function() {")
write(".__$(this).text(\"You exited!\")")
write("})")

header("events/focus")
write("$(\"input\").focus(function() {")
write(".__$(this).css(\"background-color\", \"gray\")")
write("})")
write("")

header("events/blur")
write("$(\"input\").blur(function() {")
write(".__$(this).css(\"background-color\", \"white\")")
write("})")
write("")

header("events/on")
write("$(\"input\").on({")
write(".__mouseenter: function() {")
write(".__.__$(this).css(\"color\", \"red\")")
write(".__}, mouseleave: function() {")
write(".__.__$(this).css(\"color\", \"black\")")
write(".__}")
write("})")
write("")






