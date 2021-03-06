import Clock from 'components/clock/index.js'

// --------------------------------
// Simple Component

// A simple component is just a function that returns JSX.
// A simple component takes a props object as an argument
// that contains values used to configure the component.

// --------------------------------
const Title = (props) => {
    return (
        <h1>{props.title}</h1>
    );
}
// --------------------------------







// --------------------------------
// Stateful Component

// A stateful component is defined as a class. The class below
// uses the ES6 style of class definition.
// A stateful component must provide a render method that returns
// JSX.
// It's constructor takes in a props object with values to configure
// the component.
// The component can define a state object that contains values the
// component uses to define it's "state". Values on state should be
// changed by calling setState( obj ) with an object containing new
// values. Changing values in this way will cause the component to
// rerender! You can see this in the example below in the tick()
// method. Here the date property on state is changed by calling
// setState() and passing an updated value. This causes the render
// method to update and display the new time.

// Notice the time to display is passed to the Title component
// as title this causes the Title component to render and it receives
// props.title which it displays.

// --------------------------------

// --------------------------------
// --------------------------------
// List
// --------------------------------
// This component will display a list of items provided by an array
// on props. Best practice, transform the array into an array of JSX!
// React will render the entire list if given an array of JSX items.
// Each item should have a unique key value!

const List = (props) => {
  const items = props.items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <ul>
      {items}
    </ul>
  );
}
// ----------------------------------


// These things will be displayed in the list.
const things = ["AAA", "BBB", "CCC"];



// --------------------------------
// Renders reacts virtual DOM.
// --------------------------------
// This handles displaying the React stuff in the browser.
// Each of the react components is rendered as standard HTML
// at this stage.

ReactDOM.render(
  <div>
      <Title title="Simple React Starter" />
      <Clock />
      <List items={things} />
  </div>,
    document.getElementById('app')
);
