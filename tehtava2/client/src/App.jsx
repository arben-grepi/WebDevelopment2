import FormAddWord from "./components/FormAddWord";
import FormGetWords from "./components/FormGetWord";

function App() {
  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col-2 ">
          <FormAddWord />
        </div>
        <div className="col-2">
          <FormGetWords />
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default App;
