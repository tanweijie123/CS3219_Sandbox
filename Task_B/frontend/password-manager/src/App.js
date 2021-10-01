import logo from './logo.svg';
import './App.css';
import GetList from './api/GetList'
import Post from './api/Post'
import Delete from './api/Delete'
import Put from './api/Put'

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <div className="box">
          <Post></Post>
        </div>
        <div className="box">
          <Put></Put>
        </div>
        <div className="box">
          <Delete></Delete>
        </div>
      </div>
      <span>
        Disclaimer: Any errors made will be ignored. <br/>
        For example: <br/>
        Insertion must have all textbox filled and website name must be unique, <br/> 
        Edit and Delete must have an existing website in List below.
      </span>
      <hr></hr>
      <GetList></GetList>
    </div>
  );
}

export default App;
