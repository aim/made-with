export default function component(props) {
  const { children, soon = false } = props;

  return (
    <heading
      level={2}
      style={{
        displayType: "flex",
        justifyContent: "start",
        alignItems: "center",
        gutter: "medium",
        textRole: "title",
        textSize: "small",
      }}
    >
      {children}
      {soon ? <vector-graphic name='soon' style={{ width: 30 }} /> : ""}
    </heading>
  );
}
