export default function component(props) {
  const { style = {}, children } = props;

  return (
    <area
      style={{
        displayType: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gutter: "medium",
        ...style,
      }}
    >
      {children}
    </area>
  );
}
