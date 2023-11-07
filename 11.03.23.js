// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// solution

//this is an arrow function with a ternary operator
//we tell the function say hello plus check if the name is an owner or not
//if owner print boss if not guest

greet = (name, owner) => 'Hello ' + (name == owner ? 'boss' : 'guest')
