export default function component(props) {
  const { to, label, soon = false } = props;

  const location = view.location();

  return (
    <area type='list-item'>
      <link
        to={to}
        disabled={soon}
        style={{
          size: "full",
          displayType: "flex",
          justifyContent: "start",
          alignItems: "center",
          paddingBlock: "medium",
          paddingInline: "large",
          gutter: "medium",
          cornerRadius: "small",
          color: location.value.pathname === to ? "primary" : "surface-fill",
        }}
      >
        <text value={label} />
        {soon ? <vector-graphic name='soon' style={{ width: 30 }} /> : ""}
      </link>
    </area>
  );
}
