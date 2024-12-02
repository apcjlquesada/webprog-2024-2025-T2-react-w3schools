import React from 'react';
import DataFetcher from './DataFetcher.js';

function App() {
  return (
    <div>
      <h1>Fetched Data</h1>
      <DataFetcher />
    </div>
  );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);