export default function component(props) {
  const { children } = props;

  const setup = view.setup();
  setup.setConfig({ breakpoint: 700 });
  setup.addStore("app", { navigation: false, preferences: false });

  return (
    <container
      style={{
        displayType: "flex",
        flexDirection: "column",
        padding: "large",
        gutter: "large",
      }}
    >
      <header />
      <main>{children}</main>
      <scroll-top-button />
    </container>
  );
}
