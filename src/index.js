import ReactDOM from 'react-dom';
//functional component
function clock() {
  return (
    <h1 className="heading">
      <span className="text">Hello {new Date().toLocaleTimeString()}</span>
    </h1>
  );
}

ReactDOM.render(clock(), document.getElementById('root'));
