import "./RenderTableData.scss";

const RenderTableData = (props) => {
  const className = 'c-RenderTableData';
  const {
    index,
    item,
    type
  } = props;



  console.log("Test Item", item);
  return (
    <> <tr className={`${className}__customRow`} index={index} >
      <td>{item.key}</td>
      <td className={`${className}__taskname`}>{item.fields.summary}</td>
      <td>{item.fields.assignee.displayName}</td>
      <td>{item.fields.priority.name}</td>
    </tr>
      <tr className={`${className}__emptyRow`}></tr>

    </>
  );
};

export default RenderTableData;