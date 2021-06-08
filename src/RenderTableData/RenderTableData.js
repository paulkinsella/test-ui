import "./RenderTableData.scss";

const RenderTableData = (props) => {
  const className = 'c-RenderTableData';
  const {
    index,
    item,
    type
  } = props;

  const getTabledata = () => {
    return type === 'UserStories' ?
      <> <tr className={`${className}__customRow`} index={index} >
        <td>{item.fields.parent.key}</td>
        <td className={`${className}__taskname`}>{item.fields.parent.fields.summary}</td>
        {/* <td>{item.fields.parent.fields.assignee.displayName}</td> */}
        <td>{item.fields.parent.fields.priority.name}</td>
      </tr>
        <tr className={`${className}__emptyRow`}></tr></>
      :
      <> <tr className={`${className}__customRow`} index={index} >
        {/* <td>{item.key}</td>
        <td className={`${className}__taskname`}>{item.fields.summary}</td>
        <td>{item.fields.assignee.displayName}</td>
        <td>{item.fields.priority.name}</td> */}
      </tr>
        <tr className={`${className}__emptyRow`}></tr></>;
  };

  console.log("Test Item", item);
  return (
    <> <tr className={`${className}__customRow`} index={index} >
      <td>{item.key}</td>
      <td className={`${className}__taskname`}>{item.fields.summary}</td>
      <td>{item.fields.assignee.displayName}</td>
      <td>{item.fields.priority.name}</td>
    </tr>
      <tr className={`${className}__emptyRow`}></tr>
      {/* {getTabledata()} */}
    </>
  );
};

export default RenderTableData;