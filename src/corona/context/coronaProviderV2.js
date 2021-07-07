import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { helper } from '../helpers/common';
import CoronaContext from './index';
import PropTypes from 'prop-types';

const CoronaProviderV2 = (props) => {
  const [loading, setLoading] = useState(false);
  const [virus, setVirus] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataVirusCorona();
      if(!helper.isEmptyObject(data)){
        setVirus(data);
        setError({});
      } else {
        setVirus({});
        setError({cod: 404, mess: `Not found data`})
      }
      setLoading(false);
    }
    getData();
  }, []); //componentDidMount

  return (
    <>
      <CoronaContext.Provider
        value={{ loading: loading, virus: virus, error: error }}
      >
        {props.children}
      </CoronaContext.Provider>
    </>
  )
}

CoronaProviderV2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(CoronaProviderV2);