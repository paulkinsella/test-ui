import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';

import ProcessOverview from './ProcessOverview';

const ProcessOverviewWrapper = ({ processId }) => {
  const [process, setProcess] = useState(null);
  useEffect(() => {
    fetch(`/mocks/overview.json?=processId=${processId}`)
      .then(res => res.json())
      .then(data => setProcess(data));
  }, []);

  if (!process) return null;
  return (
    <ProcessOverview process={process}/>
  );
};

ProcessOverviewWrapper.propTypes = {
  processId: PropTypes.string
}

export default ProcessOverviewWrapper;
