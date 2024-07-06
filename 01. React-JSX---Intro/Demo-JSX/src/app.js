// Get root HTML Element
const rootHtmlElement = document.getElementById('root');

// Initalize root react elemnt
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//create basic react element
const headerReactSectionElement = ( 
    <header>
        <h1>Hello JSX from React!</h1>
        <h2> JSX is Awesome</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, quas.</p>
    </header>
    );

//Render content
rootReactElement.render(headerReactSectionElement);