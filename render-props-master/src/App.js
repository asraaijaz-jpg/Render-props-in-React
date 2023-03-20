import logo from "./logo.svg";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import { Button } from "semantic-ui-react";
import DataProvider from "./component/DataProvider";
import List from "./component/List";
import DataTable from "./component/Table";

function withData(Component) {
  return (props) => (
    <DataProvider
      {...props}
      render={(data) => {
        debugger;
        return <Component data={data} />;
      }}
    ></DataProvider>
  );
}

function App() {
  const DataList = withData(List);

  const Table = withData(DataTable);

  return (
    <div>
      <Button>Hello World</Button>
      <DataList url="https://randomuser.me/api?results=10" />
      <DataList url="https://randomuser.me/api?results=20" />

      <Table url="https://randomuser.me/api?results=20" />
    </div>
  );
}

export default App;
