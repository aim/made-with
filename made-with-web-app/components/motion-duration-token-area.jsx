export default function component(props) {
  const { key = "" } = props;

  const color = view.state("surface");

  const pointerEnter = () => {
    color.value = "inverse-surface";
  };

  const pointerLeave = () => {
    color.value = "surface";
  };

  const unmount = () => {
    color.destroy();
  };

  return (
    <area
      style={{
        width: 200,
        height: 200,
        displayType: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "medium",
        cornerRadius: "medium",
        color,
        borderStyle: "dashed",
        borderWidth: "medium",
        borderColor: "outline",
        textRole: "label",
        textSize: "small",
        textAlign: "center",
        transitions: [
          {
            property: "all",
            duration: key,
            easing: "standard",
          },
        ],
      }}
      onPointerEnter={pointerEnter}
      onPointerLeave={pointerLeave}
      onUnmount={unmount}
    >
      <text value={key} />
    </area>
  );
}
