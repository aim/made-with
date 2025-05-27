export default function component(props) {
  const { key = "", title = "", child = "" } = props;

  const [textRole, textSize] = key.split("-");

  return (
    <area
      style={child !== "first" ? { marginBlockStart: "2-extra-large" } : {}}
    >
      <token-group-area>
        <token-area key={`${key}-font-family`} />
        <token-area key={`${key}-font-weight`} />
        <token-area key={`${key}-font-size`} />
        <token-area key={`${key}-font-letter-spacing`} />
        <token-area key={`${key}-font-line-height`} />
      </token-group-area>
      <area
        style={{
          paddingBlockStart: "extra-large",
          paddingBlockEnd: "large",
          textAlign: "center",
        }}
      >
        <text value={title} style={{ textRole, textSize }} />
      </area>
      {child !== "last" && <separator />}
    </area>
  );
}
