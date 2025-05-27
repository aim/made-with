export default function page() {
  return (
    <area
      style={{
        size: "full",
        displayType: "flex",
        flexDirection: "column",
        gutter: "large",
      }}
    >
      <token-section-area title='Color'>
        <token-group-area>
          <token-area key='primary' style={{ color: "primary" }} />
          <token-area key='primary-fill' style={{ color: "primary-fill" }} />
          <token-area
            key='primary-fill-fixed'
            style={{ color: "primary-fill-fixed" }}
          />
          <token-area
            key='primary-fill-fixed-dimmer'
            style={{ color: "primary-fill-fixed-dimmer" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area key='secondary' style={{ color: "secondary" }} />
          <token-area
            key='secondary-fill'
            style={{ color: "secondary-fill" }}
          />
          <token-area
            key='secondary-fill-fixed'
            style={{ color: "secondary-fill-fixed" }}
          />
          <token-area
            key='secondary-fill-fixed-dimmer'
            style={{ color: "secondary-fill-fixed-dimmer" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area key='tertiary' style={{ color: "tertiary" }} />
          <token-area key='tertiary-fill' style={{ color: "tertiary-fill" }} />
          <token-area
            key='tertiary-fill-fixed'
            style={{ color: "tertiary-fill-fixed" }}
          />
          <token-area
            key='tertiary-fill-fixed-dimmer'
            style={{ color: "tertiary-fill-fixed-dimmer" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area key='quaternary' style={{ color: "quaternary" }} />
          <token-area
            key='quaternary-fill'
            style={{ color: "quaternary-fill" }}
          />
          <token-area
            key='quaternary-fill-fixed'
            style={{ color: "quaternary-fill-fixed" }}
          />
          <token-area
            key='quaternary-fill-fixed-dimmer'
            style={{ color: "quaternary-fill-fixed-dimmer" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area key='quinary' style={{ color: "quinary" }} />
          <token-area key='quinary-fill' style={{ color: "quinary-fill" }} />
          <token-area
            key='quinary-fill-fixed'
            style={{ color: "quinary-fill-fixed" }}
          />
          <token-area
            key='quinary-fill-fixed-dimmer'
            style={{ color: "quinary-fill-fixed-dimmer" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area key='error' style={{ color: "error" }} />
          <token-area key='error-fill' style={{ color: "error-fill" }} />
        </token-group-area>
        <token-group-area>
          <token-area key='warning' style={{ color: "warning" }} />
          <token-area key='warning-fill' style={{ color: "warning-fill" }} />
        </token-group-area>
        <token-group-area>
          <token-area key='success' style={{ color: "success" }} />
          <token-area key='success-fill' style={{ color: "success-fill" }} />
        </token-group-area>
        <token-group-area>
          <token-area key='info' style={{ color: "info" }} />
          <token-area key='info-fill' style={{ color: "info-fill" }} />
        </token-group-area>
        <token-group-area>
          <token-area key='destructive' style={{ color: "destructive" }} />
          <token-area
            key='destructive-fill'
            style={{ color: "destructive-fill" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area key='caution' style={{ color: "caution" }} />
          <token-area key='caution-fill' style={{ color: "caution-fill" }} />
        </token-group-area>
        <token-group-area>
          <token-area key='positive' style={{ color: "positive" }} />
          <token-area key='positive-fill' style={{ color: "positive-fill" }} />
        </token-group-area>
        <token-group-area>
          <token-area key='suggestive' style={{ color: "suggestive" }} />
          <token-area
            key='suggestive-fill'
            style={{ color: "suggestive-fill" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area
            key='surface-dimmest'
            style={{ color: "surface-dimmest" }}
          />
          <token-area key='surface' style={{ color: "surface" }} />
          <token-area
            key='surface-brightest'
            style={{ color: "surface-brightest" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area
            key='surface-fill-lowest-emphasis'
            style={{ color: "surface-fill-lowest-emphasis" }}
          />
          <token-area
            key='surface-fill-low-emphasis'
            style={{ color: "surface-fill-low-emphasis" }}
          />
          <token-area key='surface-fill' style={{ color: "surface-fill" }} />
          <token-area
            key='surface-fill-high-emphasis'
            style={{ color: "surface-fill-high-emphasis" }}
          />
          <token-area
            key='surface-fill-highest-emphasis'
            style={{ color: "surface-fill-highest-emphasis" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area
            key='inverse-surface'
            style={{ color: "inverse-surface" }}
          />
          <token-area
            key='inverse-primary'
            style={{ color: "inverse-primary" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area key='outline' style={{ color: "outline" }} />
          <token-area
            key='outline-lower-emphasis'
            style={{ color: "outline-lower-emphasis" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area key='muted' style={{ color: "muted" }} />
          <token-area key='state-layer' style={{ color: "state-layer" }} />
        </token-group-area>
        <token-group-area>
          <token-area key='focus-ring' style={{ color: "focus-ring" }} />
          <token-area
            key='text-highlight'
            style={{ color: "text-highlight" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area
            key='scrollbar-thumb'
            style={{ color: "scrollbar-thumb" }}
          />
          <token-area
            key='scrollbar-track'
            style={{ color: "scrollbar-track" }}
          />
        </token-group-area>
        <token-group-area>
          <token-area key='scrim' style={{ color: "scrim" }} />
          <token-area key='shadow' style={{ color: "shadow" }} />
        </token-group-area>
      </token-section-area>
      <separator />
      <token-section-area title='Elevation'>
        <token-group-area>
          <token-area key='0' style={{ elevation: 0 }} />
          <token-area key='1' style={{ elevation: 1 }} />
          <token-area key='2' style={{ elevation: 2 }} />
        </token-group-area>
        <token-group-area>
          <token-area key='3' style={{ elevation: 3 }} />
          <token-area key='4' style={{ elevation: 4 }} />
          <token-area key='5' style={{ elevation: 5 }} />
        </token-group-area>
      </token-section-area>
      <separator />
      <token-section-area title='Motion (easing)'>
        <token-group-area>
          <motion-easing-token-area key='standard' />
          <motion-easing-token-area key='standard-decelerate' />
          <motion-easing-token-area key='standard-accelerate' />
        </token-group-area>
        <token-group-area>
          <motion-easing-token-area key='emphasized' />
          <motion-easing-token-area key='emphasized-decelerate' />
          <motion-easing-token-area key='emphasized-accelerate' />
        </token-group-area>
      </token-section-area>
      <separator />
      <token-section-area title='Motion (duration)'>
        <token-group-area>
          <motion-duration-token-area key='short-1' />
          <motion-duration-token-area key='short-2' />
          <motion-duration-token-area key='short-3' />
          <motion-duration-token-area key='short-4' />
        </token-group-area>
        <token-group-area>
          <motion-duration-token-area key='medium-1' />
          <motion-duration-token-area key='medium-2' />
          <motion-duration-token-area key='medium-3' />
          <motion-duration-token-area key='medium-4' />
        </token-group-area>
        <token-group-area>
          <motion-duration-token-area key='long-1' />
          <motion-duration-token-area key='long-2' />
          <motion-duration-token-area key='long-3' />
          <motion-duration-token-area key='long-4' />
        </token-group-area>
        <token-group-area>
          <motion-duration-token-area key='extra-long-1' />
          <motion-duration-token-area key='extra-long-2' />
          <motion-duration-token-area key='extra-long-3' />
          <motion-duration-token-area key='extra-long-4' />
        </token-group-area>
      </token-section-area>
      <separator />
      <token-section-area title='Shape (corner radius)'>
        <token-group-area>
          <token-area
            key='extra-small'
            style={{ cornerRadius: "extra-small" }}
          />
          <token-area key='small' style={{ cornerRadius: "small" }} />
          <token-area key='medium' style={{ cornerRadius: "medium" }} />
          <token-area key='large' style={{ cornerRadius: "large" }} />
          <token-area
            key='extra-large'
            style={{ cornerRadius: "extra-large" }}
          />
        </token-group-area>
      </token-section-area>
      <separator />
      <token-section-area title='Shape (outline width)'>
        <token-group-area>
          <token-area key='small' style={{ borderWidth: "small" }} />
          <token-area key='medium' style={{ borderWidth: "medium" }} />
          <token-area key='large' style={{ borderWidth: "large" }} />
        </token-group-area>
      </token-section-area>
      <separator />
      <token-section-area title='Shape (focus ring)'>
        <token-group-area>
          <token-area key='width' />
          <token-area key='style' />
          <token-area key='offset' />
        </token-group-area>
      </token-section-area>
      <separator />
      <token-section-area title='Space'>
        <token-group-area>
          <space-token-area key='3-extra-small' />
          <space-token-area key='2-extra-small' />
          <space-token-area key='extra-small' />
        </token-group-area>
        <token-group-area>
          <space-token-area key='small' />
          <space-token-area key='medium' />
          <space-token-area key='large' />
        </token-group-area>
        <token-group-area>
          <space-token-area key='extra-large' />
          <space-token-area key='2-extra-large' />
          <space-token-area key='3-extra-large' />
        </token-group-area>
      </token-section-area>
      <separator />
      <token-section-area title='Type'>
        <type-token-group-area
          key='display-large'
          title='Display Large'
          child='first'
        />
        <type-token-group-area key='display-medium' title='Display Medium' />
        <type-token-group-area key='display-small' title='Display Small' />
        <type-token-group-area key='headline-large' title='Headline Large' />
        <type-token-group-area key='headline-medium' title='Headline Medium' />
        <type-token-group-area key='headline-small' title='Headline Small' />
        <type-token-group-area key='title-large' title='Title Large' />
        <type-token-group-area key='title-medium' title='Title Medium' />
        <type-token-group-area key='title-small' title='Title Small' />
        <type-token-group-area key='body-large' title='Body Large' />
        <type-token-group-area key='body-medium' title='Body Medium' />
        <type-token-group-area key='body-small' title='Body Small' />
        <type-token-group-area key='label-large' title='Label Large' />
        <type-token-group-area key='label-medium' title='Label Medium' />
        <type-token-group-area
          key='label-small'
          title='Label Small'
          child='last'
        />
      </token-section-area>
    </area>
  );
}
