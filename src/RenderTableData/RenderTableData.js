const RenderTableData = (props) => {
  const {
    index,
    item
  } = props;
  return (
    <tr className="customRow" index={index} >
      <td>{item.number}</td>
      <td>{item.name}</td>
      <td>{item.assignee}</td>
    </tr>
  );
};

export default RenderTableData;