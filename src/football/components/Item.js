import React from "react";
import { Card, Image } from "antd";
import { helper } from "../helpers/common";
import MyContext from "../context";
const ViewResultFootball = () => {
  return (
    <MyContext.Consumer>
      {(context) => {
        // console.log(context);
        if (helper.isEmptyObject(context.football)) {
          return <h3> not found data</h3>;
        } else {
          return (
            <>
              {context.football.map((item, index) => (
                <Card
                  title={item.group}
                  style={{
                    marginTop: "20px",
                  }}
                  key={index}
                >
                  <table
                    width="100%"
                    border="0"
                    cellPadding="0"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th align="left"> # </th>
                        <th align="left"> Logo</th>
                        <th align="center"> Name</th>
                        <th align="right"> +/-</th>
                        <th align="right"> Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td align="left"> {item.rank} </td>
                        <td>
                          <Image align="left" width={50} src={item.logo} />
                        </td>
                        <td align="center">{item.team_name}</td>
                        <td align="right"> {item.goals_diff} </td>
                        <td align="right"> {item.points}</td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
              ))}
            </>
          );
        }
      }}
    </MyContext.Consumer>
  );
};
export default React.memo(ViewResultFootball);
