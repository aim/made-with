export default function component(props) {
  const scroll = view.scroll();
  const elevation = view.state(() => {
    return scroll.value.top > 0 ? 2 : 0;
  });

  const store = view.store("app");
  const navigation = view.sheet(() => <navigation-sheet />);
  const preferences = view.dialog(() => <preferences-dialog />, {
    name: "preferences",
  });

  navigation.opened.subscribe((value) => {
    store.value.navigation = value;
  });
  preferences.opened.subscribe((value) => {
    store.value.preferences = value;
  });

  return (
    <area
      type='header'
      style={{
        height: 50,
        position: "sticky",
        top: "large",
        zOrder: 3,
        displayType: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "medium",
        gutter: "medium",
        cornerRadius: "large",
        backgroundColor: "surface-fill-lowest-emphasis",
        backgroundOpacity: 0.9,
        elevation,
        backdropFilters: [
          {
            function: "blur",
            arguments: [8],
          },
        ],
      }}
    >
      <icon-button
        name='menu'
        style={{ variant: "unfilled" }}
        onPress={navigation.open}
      />
      <link to='/' style={{ height: "100%", displayType: "block" }}>
        <logo type='combination-mark' style={{ width: 145 }} />
      </link>
      <icon-button
        name='tune'
        style={{ variant: "unfilled" }}
        onPress={preferences.open}
      />
    </area>
  );
}
