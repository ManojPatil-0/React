/*
<div id = "heading">
    <div id = "child1">
        <h1>first</h1>
        <h2>second</h2>
    </div>
    <div id = "child2">
        <h1>first</h1>
        <h2>second</h2>
    </div>
</div>
*/

const parent = React.createElement( 
                "div",
                {id:"heading"},
                [React.createElement(
                    "div",
                    {id : "child1"},
                [React.createElement(
                    "h1",
                    {},
                    "First"
                    ),
                React.createElement(
                    "h1",
                    {},
                    "Second"
                    )
                ]),
                React.createElement(
                    "div",
                    {id : "child2"},
                [React.createElement(
                    "h1",
                    {},
                    "First"
                    ),
                React.createElement(
                    "h1",
                    {},
                    "Second"
                    )
                ])
            ]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);