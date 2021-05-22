import "./RenderTableData.scss";

const RenderTableData = (props) => {
  const className = 'c-RenderTableData';
  const {
    index,
    item
  } = props;
  return (
    <> <tr className={`${className}__customRow`} index={index} >
      <td>{item.number}</td>
      <td>{item.name}</td>
      <td>{item.assignee}</td>
    </tr>
      <tr className={`${className}__emptyRow`}></tr></>
  );
};

export default RenderTableData;