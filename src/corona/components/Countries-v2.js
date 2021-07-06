import React from "react";
import { Row, Col, Table, Skeleton, Input } from "antd";
import { helper } from "../helpers/common";
import NumberFormat from "react-number-format";
import CoronaContext from "../context/index";
const { Search } = Input;

const columns = [
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country",
  },
  {
    title: "Country code",
    dataIndex: "CountryCode",
    key: "CountryCode",
  },
  {
    title: "New Confirmed",
    dataIndex: "NewConfirmed",
    key: "NewConfirmed",

    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "Total Confirmed",
    dataIndex: "TotalConfirmed",
    key: "TotalConfirmed",
    defaultSortOrder: "descend",
    sorter: {
      compare: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
    },

    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "New Deaths",
    dataIndex: "NewDeaths",
    key: "NewDeaths",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "Total Deaths",
    dataIndex: "TotalDeaths",
    key: "TotalDeaths",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "New Recovered",
    dataIndex: "NewRecovered",
    key: "NewRecovered",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "Total Recovered",
    dataIndex: "TotalRecovered",
    key: "TotalRecovered",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
];
const CountriesVirus = () => {
  const { loading, virus } = React.useContext(CoronaContext);
  const [coronaFilter, setCoronaFilter] = React.useState(virus.Countries);

  if (loading || helper.isEmptyObject(virus)) {
    return <Skeleton active />;
  }
  return (
    <Row>
      <Col span={24}>
        <Search
          placeholder="Nhập tên quốc gia cần tìm"
          style={{ marginTop: "10px", marginBottom: "10px" }}
          onSearch={(val) =>
            setCoronaFilter(
              virus.Countries.filter((u) =>
                u.Country.toLowerCase().includes(val.toLowerCase())
              )
            )
          }
          enterButton
        />
        <Table
          rowKey="ID"
          dataSource={coronaFilter ? coronaFilter : virus.Countries}
          columns={columns}
        />
      </Col>
    </Row>
  );
};
export default React.memo(CountriesVirus);
