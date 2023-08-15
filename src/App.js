import "./App.css";

import Book from "./componenets/Book";
import Header from "./componenets/Header";
import { Provider } from "react-redux";
import Table from "./componenets/Table";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <Book />
        <Table />
      </section>
    </Provider>
  );
}

export default App;
