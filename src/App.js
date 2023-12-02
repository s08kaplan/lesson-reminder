import Header from "./components/Header";
import Lesson from "./components/Lesson";
import "./App.css";

function App() {
  return (
    <>
     <Header />
    <div  className="container">
      <div>
        <h1 className="text-center p-3">Lesson Reminder</h1>
      </div>

      <div className="lesson-main">
        <Lesson />
      </div>
    </div>
    </>
     
  );
}

export default App;
