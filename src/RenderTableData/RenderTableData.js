const RenderTableData = (props) => {
  const {
    index,
    item
  } = props;
  return (
    <tr className="customRow" index={index} >
      <td>{item.number}</td>
      <td>{item.name}</td>
      <td>{item.assigne}</td>
    </tr>
  );
};

export default RenderTableData;