export default function component(props) {
  const preferences = user.preferences();

  const colorScheme = view.state(() => preferences.value.colorScheme);
  const spaceSize = view.state(() => preferences.value.spaceSize);
  const textSize = view.state(() => preferences.value.textSize);
  const cornerRadius = view.state(() => preferences.value.cornerRadius);
  const outlineWidth = view.state(() => preferences.value.outlineWidth);
  const cursorStyle = view.state(() => preferences.value.cursorStyle);
  const cursorSize = view.state(() => preferences.value.cursorSize);
  const reducedMotion = view.state(() => preferences.value.reducedMotion);
  const reducedTransparency = view.state(
    () => preferences.value.reducedTransparency,
  );
  const reducedData = view.state(() => preferences.value.reducedData);
  const colorBrightness = view.state(() => preferences.value.colorBrightness);
  const colorContrast = view.state(() => preferences.value.colorContrast);
  const colorGrayscale = view.state(() => preferences.value.colorGrayscale);

  const setColorScheme = (value) => {
    preferences.value.colorScheme = value;
  };
  const setSpaceSize = (value) => {
    preferences.value.spaceSize = value;
  };
  const setTextSize = (value) => {
    preferences.value.textSize = value;
  };
  const setCornerRadius = (value) => {
    preferences.value.cornerRadius = value;
  };
  const setOutlineWidth = (value) => {
    preferences.value.outlineWidth = value;
  };
  const setCursorStyle = (value) => {
    preferences.value.cursorStyle = value;
  };
  const setCursorSize = (value) => {
    preferences.value.cursorSize = value;
  };
  const setReducedMotion = (value) => {
    preferences.value.reducedMotion = value;
  };
  const setReducedTransparency = (value) => {
    preferences.value.reducedTransparency = value;
  };
  const setReducedData = (value) => {
    preferences.value.reducedData = value;
  };
  const setColorBrightness = (value) => {
    preferences.value.colorBrightness = value;
  };
  const setColorContrast = (value) => {
    preferences.value.colorContrast = value;
  };
  const setColorGrayscale = (value) => {
    preferences.value.colorGrayscale = value;
  };

  const reset = () => {
    preferences.reset();
  };

  const unmount = () => {
    colorScheme.destroy();
    spaceSize.destroy();
    textSize.destroy();
    cornerRadius.destroy();
    outlineWidth.destroy();
    cursorStyle.destroy();
    cursorSize.destroy();
    reducedMotion.destroy();
    reducedTransparency.destroy();
    reducedData.destroy();
    colorBrightness.destroy();
    colorContrast.destroy();
    colorGrayscale.destroy();
  };

  return (
    <dialog
      name='preferences'
      title='Preferences'
      style={{
        size: "full",
        maxWidth: 550,
        maxHeight: 750,
        padding: "large",
      }}
      onUnmount={unmount}
    >
      <area
        style={{
          size: "full",
          displayType: "flex",
          flexDirection: "column",
          gutter: "large",
        }}
      >
        <area type='section'>
          <preferences-heading>
            <text value='Scheme Color' />
          </preferences-heading>
          <list-box value={colorScheme} onChange={setColorScheme}>
            <option value='light'>
              <text value='Light' />
            </option>
            <option value='auto'>
              <text value='Auto' />
            </option>
            <option value='dark'>
              <text value='Dark' />
            </option>
          </list-box>
        </area>
        <separator />
        <area type='section'>
          <preferences-heading>
            <text value='Space Size' />
          </preferences-heading>
          <list-box value={spaceSize} onChange={setSpaceSize}>
            <option value='compact'>
              <text value='Compact' />
            </option>
            <option value='normal'>
              <text value='Normal' />
            </option>
            <option value='spacious'>
              <text value='Spacious' />
            </option>
          </list-box>
        </area>
        <area type='section'>
          <preferences-heading>
            <text value='Text Size' />
          </preferences-heading>
          <list-box value={textSize} onChange={setTextSize}>
            <option value='small'>
              <text value='Small' />
            </option>
            <option value='medium'>
              <text value='Medium' />
            </option>
            <option value='large'>
              <text value='Large' />
            </option>
          </list-box>
        </area>
        <separator />
        <area type='section'>
          <preferences-heading>
            <text value='Corner Radius' />
          </preferences-heading>
          <list-box value={cornerRadius} onChange={setCornerRadius}>
            <option value='sharp'>
              <text value='Sharp' />
            </option>
            <option value='normal'>
              <text value='Normal' />
            </option>
            <option value='round'>
              <text value='Round' />
            </option>
          </list-box>
        </area>
        <area type='section'>
          <preferences-heading>
            <text value='Outline Width' />
          </preferences-heading>
          <list-box value={outlineWidth} onChange={setOutlineWidth}>
            <option value='thin'>
              <text value='Thin' />
            </option>
            <option value='normal'>
              <text value='Normal' />
            </option>
            <option value='thick'>
              <text value='Thick' />
            </option>
          </list-box>
        </area>
        <separator />
        <area type='section'>
          <preferences-heading soon={true}>
            <text value='Cursor Style' />
          </preferences-heading>
          <list-box value={cursorStyle} onChange={setCursorStyle} disabled>
            <option value='classic'>
              <text value='Classic' />
            </option>
            <option value='modern'>
              <text value='Modern' />
            </option>
          </list-box>
        </area>
        <area type='section'>
          <preferences-heading soon={true}>
            <text value='Cursor Size' />
          </preferences-heading>
          <list-box value={cursorSize} onChange={setCursorSize} disabled>
            <option value='small'>
              <text value='Small' />
            </option>
            <option value='medium'>
              <text value='Medium' />
            </option>
            <option value='large'>
              <text value='Large' />
            </option>
          </list-box>
        </area>
        <separator />
        <area
          type='section'
          style={{
            displayType: "flex",
            flexDirection: "column",
            gutter: "large",
          }}
        >
          <area
            style={{
              displayType: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              <text value='Reduce Motion' />
            </label>
            <switch value={reducedMotion} onChange={setReducedMotion} />
          </area>
          <area
            style={{
              displayType: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              <text value='Reduce Transparency' />
            </label>
            <switch
              value={reducedTransparency}
              onChange={setReducedTransparency}
            />
          </area>
          <area
            style={{
              displayType: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              <text value='Reduce Data' />
            </label>
            <switch value={reducedData} onChange={setReducedData} />
          </area>
        </area>
        <separator />
        <area type='section'>
          <preferences-heading>
            <text value='Color Brightness' />
          </preferences-heading>
          <slider
            min={0}
            max={100}
            step={1}
            value={colorBrightness}
            onChange={setColorBrightness}
          />
        </area>
        <area type='section'>
          <preferences-heading>
            <text value='Color Contrast' />
          </preferences-heading>
          <slider
            min={0}
            max={100}
            step={1}
            value={colorContrast}
            onChange={setColorContrast}
          />
        </area>
        <area type='section'>
          <preferences-heading>
            <text value='Color Grayscale' />
          </preferences-heading>
          <slider
            min={0}
            max={100}
            step={1}
            value={colorGrayscale}
            onChange={setColorGrayscale}
          />
        </area>
        <area
          style={{
            displayType: "flex",
            justifyContent: "end",
          }}
        >
          <button onPress={reset}>
            <text value='Reset' />
            <icon name='refresh' />
          </button>
        </area>
      </area>
    </dialog>
  );
}
