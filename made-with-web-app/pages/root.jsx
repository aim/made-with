export default function page() {
  const config = view.config();
  const columns = view.state("auto");

  const resize = (value) => {
    if (value.width < config.breakpoint) {
      if (columns.value === "auto") columns.value = "full";
    } else {
      if (columns.value === "full") columns.value = "auto";
    }
  };

  const unmount = () => {
    columns.destroy();
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
      <labeled-area label='area'>
        <area
          style={{
            size: "full",
            displayType: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <area
            style={{
              maxWidth: 600,
              displayType: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gutter: "medium",
            }}
          >
            <area
              style={{
                width: 200,
                height: 200,
                color: "surface-fill-low-emphasis",
                cornerRadius: "medium",
              }}
            ></area>
            <area
              movable
              style={{
                width: 200,
                height: 200,
                color: "surface-fill-low-emphasis",
                cornerRadius: "medium",
              }}
            ></area>
            <area
              scrollable
              style={{
                width: 200,
                height: 200,
                color: "surface-fill-low-emphasis",
                cornerRadius: "medium",
              }}
            >
              <area style={{ width: 350, height: 350 }}></area>
            </area>
            <area
              scrollable='y'
              style={{
                width: 200,
                height: 200,
                color: "surface-fill-low-emphasis",
                cornerRadius: "medium",
              }}
            >
              <area style={{ height: 350 }}></area>
            </area>
            <area
              scrollable='x'
              style={{
                width: 200,
                height: 200,
                color: "surface-fill-low-emphasis",
                cornerRadius: "medium",
              }}
            >
              <area style={{ width: 350 }}></area>
            </area>
            <area
              resizable
              style={{
                width: 200,
                height: 200,
                color: "surface-fill-low-emphasis",
                cornerRadius: "medium",
              }}
            >
              <area style={{ width: 350, height: 350 }}></area>
            </area>
            <area
              resizable='y'
              style={{
                width: 200,
                height: 200,
                color: "surface-fill-low-emphasis",
                cornerRadius: "medium",
              }}
            >
              <area style={{ width: 350, height: 350 }}></area>
            </area>
            <area
              resizable='x'
              style={{
                width: 200,
                height: 200,
                color: "surface-fill-low-emphasis",
                cornerRadius: "medium",
              }}
            >
              <area style={{ width: 350, height: 350 }}></area>
            </area>
          </area>
        </area>
      </labeled-area>
      <labeled-area label='container' columns={columns}>
        <container
          style={{
            size: "full",
            maxWidth: 200,
            maxHeight: 200,
            aspectRatio: "1/1",
            color: "surface-fill-low-emphasis",
            cornerRadius: "medium",
          }}
        ></container>
      </labeled-area>
      <labeled-area label='card' columns={columns}>
        <card
          style={{
            size: "full",
            maxWidth: 200,
            maxHeight: 200,
            aspectRatio: "1/1",
          }}
        ></card>
      </labeled-area>
      <labeled-area label='text' columns={columns}>
        <text value='Hello, World!' />
      </labeled-area>
      <labeled-area label='heading' columns={columns}>
        <area
          style={{
            displayType: "flex",
            flexDirection: "column",
            gutter: "small",
          }}
        >
          <heading level='1'>
            <text value='Heading 1' />
          </heading>
          <heading level='2'>
            <text value='Heading 2' />
          </heading>
          <heading level='3'>
            <text value='Heading 3' />
          </heading>
          <heading level='4'>
            <text value='Heading 4' />
          </heading>
          <heading level='5'>
            <text value='Heading 5' />
          </heading>
          <heading level='6'>
            <text value='Heading 6' />
          </heading>
        </area>
      </labeled-area>
      <labeled-area label='paragraph' columns={columns}>
        <paragraph>
          <text value='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' />
        </paragraph>
      </labeled-area>
      <labeled-area label='quote' columns={columns}>
        <quote>
          <text value='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' />
        </quote>
      </labeled-area>
      <labeled-area label='list-item' columns={columns}>
        <list>
          <list-item>
            <text value='List Item 1' />
          </list-item>
        </list>
      </labeled-area>
      <labeled-area label='list' columns={columns}>
        <area
          style={{
            displayType: "flex",
            gutter: "small",
          }}
        >
          <list variant='bulleted'>
            <list-item>
              <text value='List Item 1' />
            </list-item>
            <list-item>
              <text value='List Item 2' />
              <list variant='bulleted'>
                <list-item>
                  <text value='List Item 2.1' />
                </list-item>
                <list-item>
                  <text value='List Item 2.2' />
                  <list variant='bulleted'>
                    <list-item>
                      <text value='List Item 2.2.1' />
                    </list-item>
                    <list-item>
                      <text value='List Item 2.2.2' />
                    </list-item>
                    <list-item>
                      <text value='List Item 2.2.3' />
                    </list-item>
                  </list>
                </list-item>
                <list-item>
                  <text value='List Item 2.3' />
                </list-item>
              </list>
            </list-item>
            <list-item>
              <text value='List Item 3' />
            </list-item>
          </list>
          <list variant='numbered'>
            <list-item>
              <text value='List Item 1' />
            </list-item>
            <list-item>
              <text value='List Item 2' />
              <list variant='numbered'>
                <list-item>
                  <text value='List Item 2.1' />
                </list-item>
                <list-item>
                  <text value='List Item 2.2' />
                  <list variant='numbered'>
                    <list-item>
                      <text value='List Item 2.2.1' />
                    </list-item>
                    <list-item>
                      <text value='List Item 2.2.2' />
                    </list-item>
                    <list-item>
                      <text value='List Item 2.2.3' />
                    </list-item>
                  </list>
                </list-item>
                <list-item>
                  <text value='List Item 2.3' />
                </list-item>
              </list>
            </list-item>
            <list-item>
              <text value='List Item 3' />
            </list-item>
          </list>
        </area>
      </labeled-area>
      <labeled-area label='table-header-cell' columns={columns}>
        <table>
          <table-row>
            <table-header-cell scope='row'>
              <text value='Column 1' />
            </table-header-cell>
          </table-row>
        </table>
      </labeled-area>
      <labeled-area label='table-data-cell' columns={columns}>
        <table>
          <table-row>
            <table-data-cell>
              <number value={1.1} />
            </table-data-cell>
          </table-row>
        </table>
      </labeled-area>
      <labeled-area label='table-row' columns={columns}>
        <table>
          <table-row>
            <table-header-cell scope='row'>
              <text value='Row 1' />
            </table-header-cell>
            <table-data-cell>
              <number value={2.1} />
            </table-data-cell>
          </table-row>
        </table>
      </labeled-area>
      <labeled-area label='table-row-group' columns={columns}>
        <table>
          <table-row-group type='header'>
            <table-row>
              <table-header-cell scope='col'>
                <text value='Column 1' />
              </table-header-cell>
              <table-header-cell scope='col'>
                <text value='Column 2' />
              </table-header-cell>
              <table-header-cell scope='col'>
                <text value='Column 3' />
              </table-header-cell>
            </table-row>
          </table-row-group>
        </table>
      </labeled-area>
      <labeled-area label='table'>
        <table>
          <table-row-group type='header'>
            <table-row>
              <table-header-cell scope='col'>
                <text value='Column 1' />
              </table-header-cell>
              <table-header-cell scope='col'>
                <text value='Column 2' />
              </table-header-cell>
              <table-header-cell scope='col'>
                <text value='Column 3' />
              </table-header-cell>
            </table-row>
          </table-row-group>
          <table-row-group>
            <table-row>
              <table-header-cell scope='row'>
                <text value='Row 1' />
              </table-header-cell>
              <table-data-cell>
                <number value={2.1} />
              </table-data-cell>
              <table-data-cell>
                <number value={3.1} />
              </table-data-cell>
            </table-row>
            <table-row>
              <table-header-cell scope='row'>
                <text value='Row 2' />
              </table-header-cell>
              <table-data-cell>
                <number value={2.2} />
              </table-data-cell>
              <table-data-cell>
                <number value={3.2} />
              </table-data-cell>
            </table-row>
            <table-row>
              <table-header-cell scope='row'>
                <text value='Row 3' />
              </table-header-cell>
              <table-data-cell>
                <number value={2.3} />
              </table-data-cell>
              <table-data-cell>
                <number value={3.3} />
              </table-data-cell>
            </table-row>
          </table-row-group>
        </table>
      </labeled-area>
      <labeled-area label='data-list' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='data-table' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='icon' columns={columns}>
        <icon />
      </labeled-area>
      <labeled-area label='logo' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 200,
            displayType: "flex",
            gutter: "small",
          }}
        >
          <logo type='logo-mark' />
          <logo type='combination-mark' />
        </area>
      </labeled-area>
      <labeled-area label='button'>
        <area
          style={{
            displayType: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gutter: "medium",
            padding: "small",
          }}
        >
          <area
            style={{
              displayType: "flex",
              flexDirection: "column",
              gutter: "small",
            }}
          >
            <button style={{ variant: "filled", color: "primary" }}>
              <text value='Primary' />
            </button>
            <button disabled style={{ variant: "filled", color: "primary" }}>
              <text value='Primary' />
            </button>
            <button style={{ variant: "outlined", color: "primary" }}>
              <text value='Primary' />
            </button>
            <button disabled style={{ variant: "outlined", color: "primary" }}>
              <text value='Primary' />
            </button>
            <button style={{ variant: "unfilled", color: "primary" }}>
              <text value='Primary' />
            </button>
            <button disabled style={{ variant: "unfilled", color: "primary" }}>
              <text value='Primary' />
            </button>
          </area>
          <area
            style={{
              displayType: "flex",
              flexDirection: "column",
              gutter: "small",
            }}
          >
            <button style={{ variant: "filled", color: "secondary" }}>
              <text value='Secondary' />
            </button>
            <button disabled style={{ variant: "filled", color: "secondary" }}>
              <text value='Secondary' />
            </button>
            <button style={{ variant: "outlined", color: "secondary" }}>
              <text value='Secondary' />
            </button>
            <button
              disabled
              style={{ variant: "outlined", color: "secondary" }}
            >
              <text value='Secondary' />
            </button>
            <button style={{ variant: "unfilled", color: "secondary" }}>
              <text value='Secondary' />
            </button>
            <button
              disabled
              style={{ variant: "unfilled", color: "secondary" }}
            >
              <text value='Secondary' />
            </button>
          </area>
          <area
            style={{
              displayType: "flex",
              flexDirection: "column",
              gutter: "small",
            }}
          >
            <button style={{ variant: "filled", color: "positive" }}>
              <text value='Positive' />
            </button>
            <button disabled style={{ variant: "filled", color: "positive" }}>
              <text value='Positive' />
            </button>
            <button style={{ variant: "outlined", color: "positive" }}>
              <text value='Positive' />
            </button>
            <button disabled style={{ variant: "outlined", color: "positive" }}>
              <text value='Positive' />
            </button>
            <button style={{ variant: "unfilled", color: "positive" }}>
              <text value='Positive' />
            </button>
            <button disabled style={{ variant: "unfilled", color: "positive" }}>
              <text value='Positive' />
            </button>
          </area>
          <area
            style={{
              displayType: "flex",
              flexDirection: "column",
              gutter: "small",
            }}
          >
            <button style={{ variant: "filled", color: "caution" }}>
              <text value='Caution' />
            </button>
            <button disabled style={{ variant: "filled", color: "caution" }}>
              <text value='Caution' />
            </button>
            <button style={{ variant: "outlined", color: "caution" }}>
              <text value='Caution' />
            </button>
            <button disabled style={{ variant: "outlined", color: "caution" }}>
              <text value='Caution' />
            </button>
            <button style={{ variant: "unfilled", color: "caution" }}>
              <text value='Caution' />
            </button>
            <button disabled style={{ variant: "unfilled", color: "caution" }}>
              <text value='Caution' />
            </button>
          </area>
          <area
            style={{
              displayType: "flex",
              flexDirection: "column",
              gutter: "small",
            }}
          >
            <button style={{ variant: "filled", color: "destructive" }}>
              <text value='Destructive' />
            </button>
            <button
              disabled
              style={{ variant: "filled", color: "destructive" }}
            >
              <text value='Destructive' />
            </button>
            <button style={{ variant: "outlined", color: "destructive" }}>
              <text value='Destructive' />
            </button>
            <button
              disabled
              style={{ variant: "outlined", color: "destructive" }}
            >
              <text value='Destructive' />
            </button>
            <button style={{ variant: "unfilled", color: "destructive" }}>
              <text value='Destructive' />
            </button>
            <button
              disabled
              style={{ variant: "unfilled", color: "destructive" }}
            >
              <text value='Destructive' />
            </button>
          </area>
        </area>
      </labeled-area>
      <labeled-area label='icon-button' columns={columns}>
        <area
          style={{
            displayType: "flex",
            gutter: "small",
          }}
        >
          <icon-button style={{ variant: "filled" }} />
          <icon-button style={{ variant: "outlined" }} />
          <icon-button style={{ variant: "unfilled" }} />
        </area>
      </labeled-area>
      <labeled-area label='button-group' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='chip' columns={columns}>
        <area
          style={{ displayType: "flex", padding: "small", gutter: "medium" }}
        >
          <area
            style={{
              displayType: "flex",
              flexDirection: "column",
              gutter: "small",
            }}
          >
            <chip type='label'>
              <text value='Label' />
            </chip>
            <chip type='label' style={{ color: "success" }}>
              <text type='label' value='Label' />
            </chip>
            <chip type='label' style={{ color: "warning" }}>
              <text type='label' value='Label' />
            </chip>
            <chip type='label' style={{ color: "error" }}>
              <text type='label' value='Label' />
            </chip>
          </area>
          <area
            style={{
              displayType: "flex",
              flexDirection: "column",
              gutter: "small",
            }}
          >
            <chip type='assist'>
              <text value='Assist' />
            </chip>
            <chip type='filter'>
              <text value='Filter' />
            </chip>
            <chip type='input'>
              <text value='Input' />
            </chip>
            <chip type='suggestion'>
              <text value='Suggestion' />
            </chip>
          </area>
        </area>
      </labeled-area>
      <labeled-area label='check-box' columns={columns}>
        <check-box />
      </labeled-area>
      <labeled-area label='switch' columns={columns}>
        <switch />
      </labeled-area>
      <labeled-area label='radio' columns={columns}>
        <radio />
      </labeled-area>
      <labeled-area label='radio-group' columns={columns}>
        <radio-group>
          <label>
            <radio name='option' value='1' />
            <text value='Option 1' />
          </label>
          <label>
            <radio name='option' value='2' />
            <text value='Option 2' />
          </label>
          <label>
            <radio name='option' value='3' />
            <text value='Option 3' />
          </label>
        </radio-group>
      </labeled-area>
      <labeled-area label='option' columns={columns}>
        <list-box style={{ minHeight: 100 }}>
          <option>
            <text value='Option 1' />
          </option>
        </list-box>
      </labeled-area>
      <labeled-area label='list-box' columns={columns}>
        <list-box value='2' style={{ minHeight: 100 }}>
          <option value='1'>
            <text value='Option 1' />
          </option>
          <option value='2'>
            <text value='Option 2' />
          </option>
          <option value='3'>
            <text value='Option 3' />
          </option>
        </list-box>
      </labeled-area>
      <labeled-area label='dropdown' columns={columns}>
        <dropdown>
          <option value='1'>
            <text value='Option 1' />
          </option>
          <option value='2'>
            <text value='Option 2' />
          </option>
          <option value='3'>
            <text value='Option 3' />
          </option>
        </dropdown>
      </labeled-area>
      <labeled-area label='text-box' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 200,
            displayType: "flex",
            flexDirection: "column",
            gutter: "small",
          }}
        >
          <text-box placeholder='Text' />
          <text-box placeholder='Email' type='email' />
          <text-box placeholder='Password' type='password' />
          <text-box placeholder='Phone' type='phone' />
          <text-box placeholder='URL' type='url' />
          <text-box placeholder='Multiline' multiline />
        </area>
      </labeled-area>
      <labeled-area label='number-box' columns={columns}>
        <number-box />
      </labeled-area>
      <labeled-area label='search-box' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='combo-box' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='slider' columns={columns}>
        <slider
          min={0}
          max={100}
          step={1}
          value={50}
          label='Slider'
          style={{ maxWidth: 200 }}
        />
      </labeled-area>
      <labeled-area label='meter' columns={columns}>
        <meter
          low={5}
          high={80}
          optimum={50}
          value={50}
          style={{ maxWidth: 200 }}
        />
      </labeled-area>
      <labeled-area label='date-picker' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='time-picker' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='file-picker' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='color-picker' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='progress-bar' columns={columns}>
        <progress-bar variant='indeterminate' />
        <progress-bar variant='determinate' value={50} />
      </labeled-area>
      <labeled-area label='loader' columns={columns}>
        <area style={{ displayType: "flex", gutter: "small" }}>
          <loader variant='indeterminate' />
          <loader variant='determinate' value={50} />
        </area>
      </labeled-area>
      <labeled-area label='separator' columns={columns}>
        <separator />
        <area
          style={{
            width: "100%",
            displayType: "flex",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <separator orientation='vertical' style={{ height: 50 }} />
        </area>
      </labeled-area>
      <labeled-area label='accordion' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='carousel' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='photo-graphic' columns={columns}>
        <area
          style={{
            width: 200,
            height: 200,
            displayType: "flex",
            alignItems: "center",
          }}
        >
          <photo-graphic name='sky' />
        </area>
      </labeled-area>
      <labeled-area label='raster-graphic' columns={columns}>
        <area
          style={{
            width: 200,
            height: 200,
            displayType: "flex",
            alignItems: "center",
          }}
        >
          <raster-graphic name='water' />
        </area>
      </labeled-area>
      <labeled-area label='vector-graphic' columns={columns}>
        <area
          style={{
            width: 200,
            height: 200,
            displayType: "flex",
            alignItems: "center",
          }}
        >
          <vector-graphic name='abstract' />
        </area>
      </labeled-area>
      <labeled-area label='breadcrumb' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='outliner' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='tabs' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='calendar' columns={columns}>
        <area
          style={{
            width: "100%",
            maxWidth: 100,
          }}
        >
          <vector-graphic name='soon' />
        </area>
      </labeled-area>
      <labeled-area label='shape'>
        <area
          style={{
            width: "100%",
            maxWidth: 500,
            displayType: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "large",
            gutter: "medium",
          }}
        >
          <shape variant='circle' />
          <shape variant='semi-circle' />
          <shape variant='oval' />
          <shape variant='triangle' />
          <shape variant='square' />
          <shape variant='rectangle' />
          <shape variant='rhombus' />
          <shape variant='trapezoid' />
          <shape variant='parallelogram' />
          <shape variant='kite' />
          <shape variant='pentagon' />
          <shape variant='hexagon' />
          <shape variant='heptagon' />
          <shape variant='octagon' />
          <shape variant='nonagon' />
          <shape variant='decagon' />
          <shape variant='star' />
          <shape variant='heart' />
          <shape variant='diamond' />
          <shape variant='arrow' />
          <shape variant='cross' />
        </area>
      </labeled-area>
    </area>
  );
}
