export default function component(props) {
  const { children } = props;

  return (
    <area type='main' style={{ flexGrow: 1 }}>
      {children}
    </area>
  );
}
