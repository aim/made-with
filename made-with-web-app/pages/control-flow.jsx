export default function page() {
  const config = view.config();

  const columns = view.state("auto");
  const hidden = view.state([]);

  const hideReset = view.state(() => {
    return hidden.value.length < 16;
  });

  const resize = (value) => {
    if (value.width < config.breakpoint) {
      if (columns.value === "auto") columns.value = "full";
    } else {
      if (columns.value === "full") columns.value = "auto";
    }
  };

  const reset = () => {
    hidden.value.length = 0;
  };

  const unmount = () => {
    columns.destroy();
    hidden.destroy();
    hideReset.destroy();
  };

  return (
    <area
      style={{
        size: "full",
        displayType: "grid",
        gridColumns: 2,
        gutter: "large",
      }}
      onResize={resize}
      onUnmount={unmount}
    >
      <labeled-area label='hide-prop'>
        <area
          style={{
            size: "full",
            maxWidth: 400,
            maxHeight: 400,
            aspectRatio: "1/1",
            displayType: "grid",
            gridColumns: 4,
            gridRows: 4,
            gutter: "small",
          }}
        >
          <iteration
            value={16}
            render={(count) => {
              return (
                <hide-button
                  label={`box-${count}`}
                  row={Math.ceil(count / 4)}
                  column={((count - 1) % 4) + 1}
                  hidden={hidden}
                />
              );
            }}
          />
          <area
            style={{
              size: "full",
              position: "absolute",
              displayType: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            hide={hideReset}
          >
            <icon-button name='refresh' onPress={reset} />
          </area>
        </area>
      </labeled-area>
      <labeled-area label='selection' columns={columns}>
        <heading level='2'>
          <selection
            value={hidden}
            render={(value) => {
              return (
                <text
                  value={
                    value.length > 0 ? `${value.length} hidden` : "0 hidden"
                  }
                />
              );
            }}
          />
        </heading>
      </labeled-area>
      <labeled-area label='iteration' columns={columns}>
        <area
          scrollable='y'
          style={{
            width: 200,
            height: 200,
            displayType: "flex",
            flexDirection: "column",
            paddingInline: "small",
            gutter: "extra-small",
          }}
        >
          <iteration
            value={hidden}
            render={(item) => {
              return (
                <area
                  style={{
                    padding: "small",
                    cornerRadius: "small",
                    color: "surface-fill",
                    textWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <text value={item} />
                </area>
              );
            }}
          />
        </area>
      </labeled-area>
    </area>
  );
}
