export default function component(props) {
  const { key = "", style = {} } = props;

  return (
    <area
      style={{
        width: 200,
        height: 200,
        displayType: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "medium",
        cornerRadius: "medium",
        borderStyle: "dashed",
        borderWidth: "medium",
        borderColor: "outline",
        textRole: "label",
        textSize: "small",
        textAlign: "center",
        ...style,
      }}
    >
      <text value={key} />
    </area>
  );
}
