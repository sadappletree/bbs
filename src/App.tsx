import React from 'react';
import BoardList from './BoardList';
import Slide from './Slide';


function App() {
  return (
<>
<Slide/>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <BoardList/>
        </div>
      </div>
    </div>
</>
  );
}

export default App;
