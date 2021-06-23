import React, { useState, useEffect } from "react";

const Test = () => {

  const url = './defect.json';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log("Test Data", data);

  const testData = data.issues ? data.issues : '';

  const bug = testData ? testData.filter(item => item.fields.issuetype.name === 'Bug') : '';
  console.log("Bug", bug);

  const totalBugs = bug.length;
  console.log("Total Bugs", totalBugs);

  const featureRequest = testData ? testData.filter(item => item.fields.issuetype.name === 'Feature Request') : '';
  console.log("Feature Request", featureRequest);

  const doneDefects = testData ? testData.filter(item => item.fields.status.name === 'Done') : '';
  console.log("Done Defects", doneDefects);

  const totalDoneDefacts = doneDefects.length;
  console.log("Total Done Defects", totalDoneDefacts);

  const inProgress = testData ? testData.filter(item => item.fields.status.name === 'In Progress') : '';
  console.log("In Progress", inProgress);

  const totalInProgress = inProgress.length;
  console.log("Total InProgress", totalInProgress);

  const rejected = testData ? testData.filter(item => item.fields.status.name === 'Rejected') : '';
  console.log("Rejected", rejected);

  const totalRejected = rejected.length;
  console.log("Total Rejected", totalRejected);




  return (
    <div>Test</div>
  );
};

export default Test;