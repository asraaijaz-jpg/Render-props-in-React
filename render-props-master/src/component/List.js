import { React } from "react";
import { List as SList } from "semantic-ui-react";

const List = ({ data }) => {
  console.log(data);
  return (
    <SList>{data && data.map((item) => <SList.Item>{item}</SList.Item>)}</SList>
  );
};

export default List;
