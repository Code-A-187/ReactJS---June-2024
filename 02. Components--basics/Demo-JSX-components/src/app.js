// Get root HTML Element
const rootHtmlElement = document.getElementById('root');

// Initalize root react elemnt
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//create basic react element
const headingReactSectionElement = ( 
    <header className="navigation" id='site-header'>
        <h1>Hello JSX from React!</h1>
        <h2> JSX is Awesome</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, quas.</p>
    </header>
    );


// create component without JSX
function Main(props) {
    return React.createElement(
        'main',
        {},
        React.createElement(
            'h3',
            {},
            props.title,
        ),
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li',
                {},
                'The Matrix',
            ),
            React.createElement (
                'li',
                {},
                'Man of Steel',
            )
        )

    );
}

const siteContent = React.createElement (
    'div',
    {},
    headingReactSectionElement,
    React.createElement(
        Main, 
        {title: 'Best Movies'},
    ),
)

const siteContentJSX = 
    <div>
        {headingReactSectionElement}
        <Main title ='Best Movies'/>
    </div>

//Render content
rootReactElement.render(siteContentJSX);