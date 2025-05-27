export default function component(props) {
  const { label, row, column, hidden } = props;

  const hide = view.state(() => {
    return hidden.value.includes(label);
  });

  const press = () => {
    if (!hide.value) {
      hidden.value.push(label);
    }
  };

  const unmount = () => {
    hide.destroy();
  };

  return (
    <area
      type='button'
      label={label ?? "hide-box"}
      style={{
        gridRowStart: row ?? 1,
        gridColumnStart: column ?? 1,
        cornerRadius: "medium",
        backgroundColor: "surface-fill",
      }}
      hide={hide}
      onPress={press}
      onUnmount={unmount}
    />
  );
}
