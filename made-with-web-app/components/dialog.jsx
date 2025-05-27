export default function component(props) {
  const { name, title, style, children } = props;

  const close = () => {
    view.close(name);
  };

  return (
    <area style={style}>
      <area
        style={{
          size: "full",
          cornerRadius: "medium",
          backgroundColor: "surface-fill-lowest-emphasis",
          elevation: 3,
        }}
      >
        <area
          scrollable='y'
          style={{
            size: "full",
            displayType: "flex",
            flexDirection: "column",
          }}
        >
          <area
            style={{
              width: "100%",
              position: "sticky",
              top: 0,
              left: 0,
              zOrder: 3,
              displayType: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBlock: "small",
              paddingInlineStart: "large",
              paddingInlineEnd: "medium",
              cornerStartStartRadius: "medium",
              backdropFilters: [
                {
                  function: "blur",
                  arguments: [8],
                },
              ],
            }}
          >
            <heading level={1} style={{ textRole: "label", textSize: "large" }}>
              <text value={title} />
            </heading>
            <icon-button
              name='close'
              style={{ variant: "unfilled" }}
              onPress={close}
            />
          </area>
          <area
            style={{
              flexGrow: 1,
              paddingInline: "large",
              paddingBlockEnd: "large",
            }}
          >
            {children}
          </area>
        </area>
      </area>
    </area>
  );
}
