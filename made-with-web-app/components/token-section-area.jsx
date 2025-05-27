export default function component(props) {
  const { title = "Title", style = {}, children } = props;

  return (
    <area type='section'>
      <heading level='2' style={{ marginBlockEnd: "2-extra-large" }}>
        <text value={title} />
      </heading>
      <area
        style={{
          displayType: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBlockEnd: "2-extra-large",
          gutter: "medium",
          ...style,
        }}
      >
        {children}
      </area>
    </area>
  );
}
