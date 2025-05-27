export default function component(props) {
  const opacity = view.state(0);
  const store = view.store("app");
  const scroll = view.scroll();
  const size = view.size();

  store.subscribe((value) => {
    const hide =
      scroll.value.top <= size.value.height ||
      value.navigation ||
      value.preferences;
    opacity.value = hide ? 0 : 1;
  });

  scroll.subscribe((value) => {
    const show = value.top > size.value.height / 2;
    opacity.value = show ? 1 : 0;
  });

  const scrollTop = () => {
    view.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <icon-button
      name='arrow-up'
      style={{
        position: "fixed",
        bottom: "large",
        right: "large",
        zOrder: 3,
        opacity,
        elevation: 2,
        transitions: [
          {
            property: "opacity",
            duration: "short-4",
            easing: "standard",
          },
        ],
      }}
      onPress={scrollTop}
    />
  );
}
