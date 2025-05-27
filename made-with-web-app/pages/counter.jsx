export default function page() {
  const count = view.state(0);

  const increment = () => count.value++;
  const decrement = () => count.value--;

  return (
    <area
      style={{
        size: "full",
        displayType: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gutter: "large",
        cornerRadius: "large",
        backgroundColor: "surface-fill-lowest-emphasis",
      }}
    >
      <heading level='2'>
        <number value={count} />
      </heading>
      <area
        style={{
          displayType: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <icon-button name='remove' onPress={decrement} />
        <separator orientation='vertical' />
        <icon-button name='add' onPress={increment} />
      </area>
    </area>
  );
}
