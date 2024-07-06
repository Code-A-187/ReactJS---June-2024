

//Render content
rootReactElement.render(headerReactSectionElement);

// Get root HTML Element
var rootHtmlElement = document.getElementById('root');

// Initalize root react elemnt
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// create basic react element
var firstHeadingReactElement = React.createElement('h1', null, 'Hello JSX from React!');
var secondHeadingReactSectionElement = React.createElement('h2', null, 'JSX is Awesome');

var headerReactSectionElement = React.createElement('header', null, firstHeadingReactElement, secondHeadingReactSectionElement);
//Render content
rootReactElement.render(headerReactSectionElement);