export default function page() {
  return (
    <area
      style={{
        size: "full",
        displayType: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "extra-large",
        cornerRadius: "large",
        backgroundColor: "surface-fill-lowest-emphasis",
      }}
    >
      <heading level={1} style={{ maxWidth: 200 }}>
        <vector-graphic name='404' label='not-found' />
      </heading>
    </area>
  );
}
