export default function component(props) {
  const { key = "" } = props;

  const left = view.state(0);
  const intervalId = view.state(null);

  intervalId.value = setInterval(() => {
    left.value =
      left.value === 0 ? { function: "calc", arguments: ["100% - 50px"] } : 0;
  }, 1000);

  const unmount = () => {
    clearInterval(intervalId.value);
    intervalId.destroy();
    left.destroy();
  };

  return (
    <area
      style={{
        width: 200,
        height: 200,
        displayType: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "medium",
        cornerRadius: "medium",
        borderStyle: "dashed",
        borderWidth: "medium",
        borderColor: "outline",
        textRole: "label",
        textSize: "small",
        textAlign: "center",
      }}
      onUnmount={unmount}
    >
      <text value={key} />
      <area
        style={{
          size: "full",
          displayType: "flex",
          alignItems: "center",
        }}
      >
        <shape
          variant='circle'
          style={{
            width: 50,
            height: 50,
            left,
            transitions: [
              {
                property: "all",
                duration: "long-2",
                easing: key,
              },
            ],
          }}
        />
      </area>
    </area>
  );
}
