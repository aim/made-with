export default function component(props) {
  const { label = "placeholder", columns = "full", children } = props;

  return (
    <area
      style={{
        minWidth: 200,
        minHeight: 200,
        gridColumn: columns,
        displayType: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "medium",
        cornerRadius: "large",
        borderColor: "surface-fill-lowest-emphasis",
        backgroundColor: "surface-fill-lowest-emphasis",
      }}
    >
      <chip
        style={{
          position: "absolute",
          top: "medium",
          left: "medium",
        }}
      >
        <text value={label} />
      </chip>
      <area
        style={{
          size: "full",
          displayType: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBlockStart: "3-extra-large",
          paddingBlockEnd: "extra-large",
          paddingInline: "medium",
          gutter: "large",
        }}
      >
        {children}
      </area>
    </area>
  );
}
