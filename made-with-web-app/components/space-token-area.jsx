export default function component(props) {
  const { key = "" } = props;

  return (
    <area
      style={{
        width: 200,
        height: 200,
        padding: key,
        cornerRadius: "medium",
        borderStyle: "dashed",
        borderWidth: "medium",
        borderColor: "outline",
        backgroundColor: "success-fill",
        textRole: "label",
        textSize: "small",
        textAlign: "center",
      }}
    >
      <area
        style={{
          size: "full",
          displayType: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "medium",
          cornerRadius: "medium",
          backgroundColor: "info-fill",
        }}
      >
        <text value={key} />
      </area>
    </area>
  );
}
