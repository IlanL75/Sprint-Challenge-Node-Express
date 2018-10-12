# Review Questions

## What is Node.js?

	Node is a JavaScript runtime framework built on Chrome’s V8 JavaScript engine,
	a platform used to execute JavaScript applications outside the browser. 
	Node allows developers to execute JavaScript code on the server side.

## What is Express?

	Express is a web framework used in the server side development.
	Express improves the functionality of Node by allowing developers
	to easily interact with http request and response.

## Mention two parts of Express that you learned about this week.

	Server-side Routing.
	Express Middleware.

## What is Middleware?

	Server takes in a request and sends out a response.
	Middleware is a function in the middle. After incoming request,
	middleware is executed and the output could be final or could
	be used by the next middleware. Middleware is run before route is executed.

## What is a Resource?

	Resource is an object in database that can be handled on Web.

## What can the API return to help clients know if a request was successful?

	HTTP status code.
	Error message.

## How can we partition our application into sub-applications?

	We use Express Routers. We can separate large application into
	separate parts and then combine it together with Exppress Routers.

## What is express.json() and why do we need it?

	This is a built-in middleware function in Express.
	It parses incoming requests with JSON payloads.
