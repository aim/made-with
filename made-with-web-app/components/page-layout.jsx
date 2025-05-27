export default function component(props) {
  const { children } = props;

  return <area style={{ size: "full" }}>{children}</area>;
}
