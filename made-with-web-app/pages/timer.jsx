export default function page() {
  const duration = view.state(Temporal.Duration.from({ minutes: 1 }));
  const isStarted = view.state(false);
  const isPaused = view.state(false);
  const isCompleted = view.state(false);
  const intervalId = view.state(null);

  const formatted = view.state(() => {
    if (isCompleted.value) return "00:00:00";
    const currentMs = duration.value.total({ unit: "milliseconds" });
    const mins = Math.floor(currentMs / 60000)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor((currentMs % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const ms = Math.floor((currentMs % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}:${ms}`;
  });

  const increase30Seconds = () => {
    duration.value = duration.value.add({ seconds: 30 });
  };
  const increase1Minute = () => {
    duration.value = duration.value.add({ minutes: 1 });
  };
  const increase5Minutes = () => {
    duration.value = duration.value.add({ minutes: 5 });
  };

  const start = () => {
    if (!isStarted.value) {
      isStarted.value = true;
      isPaused.value = false;
      isCompleted.value = false;
      intervalId.value = setInterval(() => {
        const currentMs = duration.value.total({ unit: "milliseconds" });
        if (currentMs === 0) {
          isStarted.value = false;
          isCompleted.value = true;
          clearInterval(intervalId.value);
          intervalId.value = null;
        } else {
          duration.value = duration.value.subtract({ milliseconds: 10 });
        }
      }, 10);
    }
  };

  const pause = () => {
    if (isStarted.value) {
      isPaused.value = true;
      isStarted.value = false;
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };

  const reset = () => {
    isStarted.value = false;
    isPaused.value = false;
    isCompleted.value = false;
    duration.value = Temporal.Duration.from({ minutes: 5 });
    if (intervalId.value) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };

  const unmount = () => {
    if (intervalId.value) {
      clearInterval(intervalId.value);
    }
    duration.destroy();
    isStarted.destroy();
    isPaused.destroy();
    isCompleted.destroy();
    intervalId.destroy();
    formatted.destroy();
  };

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
      onUnmount={unmount}
    >
      <area
        style={{
          displayType: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gutter: "small",
        }}
      >
        <area
          style={{
            displayType: "flex",
            gutter: "medium",
          }}
        >
          <button
            style={{ minWidth: "auto", cornerRadius: "large" }}
            onPress={increase30Seconds}
          >
            <text value='+0:30' />
          </button>
          <button
            style={{ minWidth: "auto", cornerRadius: "large" }}
            onPress={increase1Minute}
          >
            <text value='+1:00' />
          </button>
          <button
            style={{ minWidth: "auto", cornerRadius: "large" }}
            onPress={increase5Minutes}
          >
            <text value='+5:00' />
          </button>
        </area>
        <heading level='2'>
          <text value={formatted} />
        </heading>
      </area>
      <area
        style={{
          displayType: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <icon-button name='play' onPress={start} disabled={isStarted} />
        <separator orientation='vertical' />
        <icon-button name='pause' onPress={pause} disabled={isPaused} />
        <separator orientation='vertical' />
        <icon-button name='refresh' onPress={reset} />
      </area>
    </area>
  );
}
