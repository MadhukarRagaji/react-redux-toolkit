import logo from "./logo.svg";
import "./App.css";
import BugsList from "./BugsList";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
function App() {
  const store = configureStore();

  return (
    <div className="App">
      <Provider store={store}>
        <BugsList />
      </Provider>
    </div>
  );
}

export default App;
