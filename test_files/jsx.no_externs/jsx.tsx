
// Fake a subcomponent, just to exercise components within components.
declare var Component: any;

let simple = <div></div>;

let hello = 'hello';
let helloDiv = <div>
  {hello}
  hello, world
  <Component/>
</div>;

React.render(helloDiv, document.body!);

