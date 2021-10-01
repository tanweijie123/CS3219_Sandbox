import './App.css';
import GetList from './api/GetList'
import Post from './api/Post'
import Delete from './api/Delete'
import Put from './api/Put'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App p-3">
      <div className="d-flex flex-wrap bd-highlight">
        <div className="p-2 flex-fill bd-highlight bg-light text-dark">
          <Post></Post>
        </div>
        <div className="p-2 flex-fill bd-highlight bg-dark text-light">
          <Put></Put>
        </div>
        <div className="p-2 flex-fill bd-highlight bg-light text-dark">
          <Delete></Delete>
        </div>
      </div>
      <div className="m-2 alert alert-danger">
        <span>
          <p className="h3">Disclaimer: Any errors made will be ignored. </p> <br/>
          For example: <br/>
          Insertion must have all textbox filled and website name must be unique, <br/> 
          Edit and Delete must have an existing website in List below.
        </span>
      </div>
      <hr></hr>
      <GetList></GetList>
    </div>
  );
}

export default App;
