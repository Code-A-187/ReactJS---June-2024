

//Render content
rootReactElement.render(headerReactSectionElement);


// Get root HTML Element
const rootHtmlElement = document.getElementById('root');

// Initalize root react elemnt
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// create basic react element
const firstHeadingReactElement = React.createElement('h1', null, 'Hello JSX from React!');
const secondHeadingReactSectionElement = React.createElement( 'h2', null, 'JSX is Awesome');


const headerReactSectionElement = React.createElement (
    'header',
    null,
    firstHeadingReactElement,
    secondHeadingReactSectionElement
)
//Render content
rootReactElement.render(headerReactSectionElement);