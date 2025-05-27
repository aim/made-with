export default function page() {
  const getRandomString = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from(
      { length: 3 },
      () => characters[Math.floor(Math.random() * characters.length)],
    ).join("");
  };
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 900) + 100;
  };

  const string = view.state(getRandomString());
  const number = view.state(getRandomNumber());
  const boolean = view.state(true);
  const object = view.state({ theme: { color: "light" } });
  const array = view.state([getRandomNumber()]);
  const set = view.state(new Set([getRandomString()]));
  const map = view.state(new Map([[getRandomString(), getRandomNumber()]]));
  const temporal = view.state(Temporal.Now.instant());

  const formatObject = (value) => {
    return JSON.stringify(value, null, 1);
  };
  const formatArray = (value) => {
    return `[${value.join(", ")}]`;
  };
  const formatSet = (value) => {
    return `Set(${Array.from(value).join(", ")})`;
  };
  const formatMap = (value) => {
    return `Map(${Array.from(value.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ")})`;
  };
  const formatTemporal = (value) => {
    return value.toString();
  };

  const formattedObject = view.state(() => {
    return formatObject(object.value);
  });
  const formattedArray = view.state(() => {
    return formatArray(array.value);
  });
  const formattedSet = view.state(() => {
    return formatSet(set.value);
  });
  const formattedMap = view.state(() => {
    return formatMap(map.value);
  });
  const formattedTemporal = view.state(() => {
    return formatTemporal(temporal.value);
  });

  const stringHistory = view.state([]);
  const numberHistory = view.state([]);
  const booleanHistory = view.state([]);
  const objectHistory = view.state([]);
  const arrayHistory = view.state([]);
  const setHistory = view.state([]);
  const mapHistory = view.state([]);
  const temporalHistory = view.state([]);

  string.subscribe((newValue, oldValue) => {
    stringHistory.value.unshift(oldValue);
  });
  number.subscribe((newValue, oldValue) => {
    numberHistory.value.unshift(oldValue);
  });
  boolean.subscribe((newValue, oldValue) => {
    booleanHistory.value.unshift(oldValue);
  });
  object.subscribe((newValue, oldValue) => {
    objectHistory.value.unshift(oldValue);
  });
  array.subscribe((newValue, oldValue) => {
    arrayHistory.value.unshift(oldValue);
  });
  set.subscribe((newValue, oldValue) => {
    setHistory.value.unshift(oldValue);
  });
  map.subscribe((newValue, oldValue) => {
    mapHistory.value.unshift(oldValue);
  });
  temporal.subscribe((newValue, oldValue) => {
    temporalHistory.value.unshift(oldValue);
  });

  const changeString = () => {
    string.value = getRandomString();
  };
  const changeNumber = () => {
    number.value = getRandomNumber();
  };
  const changeBoolean = () => {
    boolean.value = !boolean.value;
  };
  const changeObject = () => {
    object.value.theme.color =
      object.value.theme.color === "dark" ? "light" : "dark";
  };
  const changeArray = () => {
    array.value.push(getRandomNumber());
  };
  const changeSet = () => {
    set.value.add(getRandomString());
  };
  const changeMap = () => {
    map.value.set(getRandomString(), getRandomNumber());
  };
  const changeTemporal = () => {
    temporal.value = temporal.value.add({ minutes: 1 });
  };

  const unmount = () => {
    string.destroy();
    number.destroy();
    boolean.destroy();
    object.destroy();
    array.destroy();
    set.destroy();
    map.destroy();
    temporal.destroy();
    formattedObject.destroy();
    formattedArray.destroy();
    formattedSet.destroy();
    formattedMap.destroy();
    formattedTemporal.destroy();
    stringHistory.destroy();
    numberHistory.destroy();
    booleanHistory.destroy();
    objectHistory.destroy();
    arrayHistory.destroy();
    setHistory.destroy();
    mapHistory.destroy();
    temporalHistory.destroy();
  };

  return (
    <area
      style={{
        size: "full",
        displayType: "grid",
        gridColumns: 1,
        gutter: "large",
      }}
      onUnmount={unmount}
    >
      <labeled-area label='string'>
        <area
          scrollable='x'
          style={{
            width: "80%",
            displayType: "flex",
            paddingBlock: "medium",
            gutter: "small",
          }}
        >
          <text value={string} />
          <iteration
            value={stringHistory}
            render={(item) => (
              <area
                style={{
                  displayType: "flex",
                  alignItems: "center",
                  gutter: "small",
                }}
              >
                <text value='←' />
                <text value={item} />
              </area>
            )}
          />
        </area>
        <button
          style={{ position: "absolute", bottom: 0, right: 0 }}
          onPress={changeString}
        >
          <text value='Change' />
        </button>
      </labeled-area>
      <labeled-area label='number'>
        <area
          scrollable='x'
          style={{
            width: "80%",
            displayType: "flex",
            paddingBlock: "medium",
            gutter: "small",
          }}
        >
          <text value={number} />
          <iteration
            value={numberHistory}
            render={(item) => (
              <area
                style={{
                  displayType: "flex",
                  alignItems: "center",
                  gutter: "small",
                }}
              >
                <text value='←' />
                <text value={item} />
              </area>
            )}
          />
        </area>
        <button
          style={{ position: "absolute", bottom: 0, right: 0 }}
          onPress={changeNumber}
        >
          <text value='Change' />
        </button>
      </labeled-area>
      <labeled-area label='boolean'>
        <area
          scrollable='x'
          style={{
            width: "80%",
            displayType: "flex",
            paddingBlock: "medium",
            gutter: "small",
          }}
        >
          <text value={boolean} />
          <iteration
            value={booleanHistory}
            render={(item) => (
              <area
                style={{
                  displayType: "flex",
                  alignItems: "center",
                  gutter: "small",
                }}
              >
                <text value='←' />
                <text value={item} />
              </area>
            )}
          />
        </area>
        <button
          style={{ position: "absolute", bottom: 0, right: 0 }}
          onPress={changeBoolean}
        >
          <text value='Change' />
        </button>
      </labeled-area>
      <labeled-area label='object'>
        <area
          scrollable='x'
          style={{
            width: "80%",
            displayType: "flex",
            paddingBlock: "medium",
            gutter: "small",
          }}
        >
          <text value={formattedObject} style={{ flexShrink: 0 }} />
          <iteration
            value={objectHistory}
            render={(item) => (
              <area
                style={{
                  flexShrink: 0,
                  displayType: "flex",
                  alignItems: "center",
                  gutter: "small",
                }}
              >
                <text value='←' />
                <text value={formatObject(item)} />
              </area>
            )}
          />
        </area>
        <button
          style={{ position: "absolute", bottom: 0, right: 0 }}
          onPress={changeObject}
        >
          <text value='Change' />
        </button>
      </labeled-area>
      <labeled-area label='array'>
        <area
          scrollable='x'
          style={{
            width: "80%",
            displayType: "flex",
            paddingBlock: "medium",
            gutter: "small",
          }}
        >
          <text value={formattedArray} style={{ flexShrink: 0 }} />
          <iteration
            value={arrayHistory}
            render={(item) => (
              <area
                style={{
                  flexShrink: 0,
                  displayType: "flex",
                  alignItems: "center",
                  gutter: "small",
                }}
              >
                <text value='←' />
                <text value={formatArray(item)} />
              </area>
            )}
          />
        </area>
        <button
          style={{ position: "absolute", bottom: 0, right: 0 }}
          onPress={changeArray}
        >
          <text value='Change' />
        </button>
      </labeled-area>
      <labeled-area label='set'>
        <area
          scrollable='x'
          style={{
            width: "80%",
            displayType: "flex",
            paddingBlock: "medium",
            gutter: "small",
          }}
        >
          <text value={formattedSet} style={{ flexShrink: 0 }} />
          <iteration
            value={setHistory}
            render={(item) => (
              <area
                style={{
                  flexShrink: 0,
                  displayType: "flex",
                  alignItems: "center",
                  gutter: "small",
                }}
              >
                <text value='←' />
                <text value={formatSet(item)} />
              </area>
            )}
          />
        </area>
        <button
          style={{ position: "absolute", bottom: 0, right: 0 }}
          onPress={changeSet}
        >
          <text value='Change' />
        </button>
      </labeled-area>
      <labeled-area label='map'>
        <area
          scrollable='x'
          style={{
            width: "80%",
            displayType: "flex",
            paddingBlock: "medium",
            gutter: "small",
          }}
        >
          <text value={formattedMap} style={{ flexShrink: 0 }} />
          <iteration
            value={mapHistory}
            render={(mapItem) => (
              <area
                style={{
                  flexShrink: 0,
                  displayType: "flex",
                  alignItems: "center",
                  gutter: "small",
                }}
              >
                <text value='←' />
                <text value={formatMap(mapItem)} />
              </area>
            )}
          />
        </area>
        <button
          style={{ position: "absolute", bottom: 0, right: 0 }}
          onPress={changeMap}
        >
          <text value='Change' />
        </button>
      </labeled-area>
      <labeled-area label='temporal'>
        <area
          scrollable='x'
          style={{
            width: "80%",
            displayType: "flex",
            paddingBlock: "medium",
            gutter: "small",
          }}
        >
          <text value={formattedTemporal} style={{ flexShrink: 0 }} />
          <iteration
            value={temporalHistory}
            render={(temporal) => (
              <area
                style={{
                  flexShrink: 0,
                  displayType: "flex",
                  alignItems: "center",
                  gutter: "small",
                }}
              >
                <text value='←' />
                <text value={formatTemporal(temporal)} />
              </area>
            )}
          />
        </area>
        <button
          style={{ position: "absolute", bottom: 0, right: 0 }}
          onPress={changeTemporal}
        >
          <text value='Change' />
        </button>
      </labeled-area>
    </area>
  );
}
