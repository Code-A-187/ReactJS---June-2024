// Get root HTML Element
var rootHtmlElement = document.getElementById('root');

// Initalize root react elemnt
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//create basic react element
var headerReactSectionElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello JSX from React!'
    ),
    React.createElement(
        'h2',
        null,
        ' JSX is Awesome'
    ),
    React.createElement(
        'p',
        null,
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, quas.'
    )
);

//Render content
rootReactElement.render(headerReactSectionElement);