export default function component(props) {
  const scroll = (value) => {
    console.log("scroll on element:", value);
  };

  return (
    <area
      style={{
        size: "full",
        maxWidth: 300,
        padding: "large",
      }}
    >
      <area
        type='navigation'
        style={{
          size: "full",
          cornerRadius: "medium",
          backgroundColor: "surface-fill-lowest-emphasis",
          elevation: 3,
        }}
      >
        <area
          type='list'
          scrollable='y'
          style={{
            size: "full",
            displayType: "flex",
            flexDirection: "column",
            paddingBlock: "large",
            paddingInline: "medium",
            gutter: "small",
          }}
          onScroll={scroll}
        >
          <navigation-link to='/' label='Primitives'></navigation-link>
          <navigation-link
            to='/control-flow'
            label='Control Flow'
          ></navigation-link>
          <navigation-link to='/state' label='State'></navigation-link>
          <navigation-link
            to='/design-tokens'
            label='Design Tokens'
          ></navigation-link>
          <navigation-link to='/counter' label='Counter'></navigation-link>
          <navigation-link to='/timer' label='Timer'></navigation-link>
          <navigation-link to='/stopwatch' label='Stopwatch'></navigation-link>
          <navigation-link
            to='/calculator'
            label='Calculator'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/forms'
            label='Forms'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/tasks'
            label='Tasks'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/authentication'
            label='Authentication'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/mail'
            label='Mail'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/dashboard'
            label='Dashboard'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/music'
            label='Music'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/video'
            label='Video'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/transitions'
            label='Transitions'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/animations'
            label='Animations'
            soon={true}
          ></navigation-link>
          <navigation-link
            to='/more'
            label='More'
            soon={true}
          ></navigation-link>
        </area>
      </area>
    </area>
  );
}
