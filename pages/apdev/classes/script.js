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

//SAMPLE CLASS
header("sample class")
const bigDay = new Date(2019,6,19)
write("big day is " + bigDay.toLocaleDateString())
if(bigDay.getTime() < Date.now()) {
	write("Once upon a time...")
}

//FIRST CLASS
header("first class")
class MyClass {
	constructor() {
	}

	myField = "foo"
	myMethod() {
		write("bare")
	}

	static myStaticField = "bar"
	static myStaticMethod() {}
	static {}

	#myPrivateField = "bar"
}

write(MyClass)

write("==instance of MyClass==")
const myInstance = new MyClass()
write(myInstance.myField)
myInstance.myMethod()

const MyClass1 = class {
	aField = "meow"
}

write("==diff class expr==")
write(MyClass1)

//CONSTRUCTOR
header("constructor")
class Color {
	#values
	constructor(r,g,b) {
		this.#values = [r,g,b]
	}

	get red() {
		return this.#values[0]
	}
}
const red = new Color(255,0,0)
write("values for red are " + red.values)

const anotherRed = new Color(255,0,0)
if(red === anotherRed)
	write("its red")
else write("its different objects")

//INSTANCE
header("instance")
class ColorWithInstance {
	constructor(r,g,b) {
		this.values = [r,g,b]
	}
	getRed() {
		return this.values[0]
	}
	setRed(value) {
		this.values[0] = value
	}
}

const green = new ColorWithInstance(0,255,0)
write("the color green has this much red: " + green.getRed())
green.setRed(30)
write("the color green has this much red: " + green.getRed())

header("private")
class ColorWithPrivate {
	#values
	constructor(r,g,b) {
		this.#values = [r,g,b]
	}
	getRed() {
		return this.#values[0]
	}
	setRed(value) {
		this.#values[0] = value
		if(value < 0 || value > 255) {
			write("invalid r value")
			throw new RangeError("Invalid R value")
		}
		this.#values[0] = value
	}
}
const blue = new ColorWithPrivate(1,0,255)
write("blue has this much red: " + blue.getRed())

header("accessor fields")
class ColorWithAccessor {
	constructor(r,g,b) {
		this.values = [r,g,b]
	}

	get red() {
		return this.values[0]
	}
	set red(value) {
		this.values[0] = value
	}
}

const gred = new ColorWithAccessor(255,255,0);
write("green red has this much red: " + gred.red)

header("Extends and Inheritance")
class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b); //REQUIRED, parent class' constructor
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#alpha = value;
  }
}

write("its required to call super() or the parent class' constructor to initialize this")
const colorRed = new ColorWithAlpha(255,0,0,0.5)
write(colorRed.red)
write(colorRed.alpha)





