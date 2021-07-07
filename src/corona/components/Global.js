import React from 'react';
import { Skeleton } from 'antd';
import NumberFormat from 'react-number-format';
import { helper } from '../helpers/common';
import CoronaContext from '../context/index';

const GlobalCorona = () => {

  return (
    <CoronaContext.Consumer>
      {context => {
        if(context.loading || helper.isEmptyObject(context.virus)){
          return <Skeleton active />
        } else {
          return(
            <section className="global__corona">
              <div className="global__item">
                <p> - Moi nhiem : <NumberFormat value={context.virus.Global.NewConfirmed} displayType={'text'} thousandSeparator={true} /> </p>
                <p> - Tong ca nhiem : <NumberFormat value={context.virus.Global.TotalConfirmed} displayType={'text'} thousandSeparator={true} /></p>
              </div>
              <div className="global__item">
                <p> - Moi tu vong: <NumberFormat value={context.virus.Global.NewDeaths} displayType={'text'} thousandSeparator={true} /></p>
                <p> - Tong ca tu vong: <NumberFormat value={context.virus.Global.TotalDeaths} displayType={'text'} thousandSeparator={true} /></p>
              </div>
              <div className="global__item">
                <p> - Moi khoi benh: <NumberFormat value={context.virus.Global.NewRecovered} displayType={'text'} thousandSeparator={true} /></p>
                <p> - Tong ca khoi benh: <NumberFormat value={context.virus.Global.TotalRecovered} displayType={'text'} thousandSeparator={true} /></p>
              </div>
            </section>
          )
        }
      }}
    </CoronaContext.Consumer>
    
  )
}
export default React.memo(GlobalCorona);