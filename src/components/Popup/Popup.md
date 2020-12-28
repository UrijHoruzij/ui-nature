### Popup

```js
import { Typography } from "../";
<Popup
  visible={true}
  style={{ position: "relative", transform: "translate(0,0)", top: 0, left: 0 }}
>
  <Typography type="text">Popup</Typography>
  <Typography type="text">description</Typography>
</Popup>;
```

### Popup: close button

```js
import { Typography } from "../";
<Popup
  title="Popup"
  visible={true}
  style={{ position: "relative", transform: "translate(0,0)", top: 0, left: 0 }}
  type="popup-close"
>
  <Typography type="text">Popup</Typography>
  <Typography type="text">description</Typography>
</Popup>;
```

### Popup thumnail

```js
import { Image, Button } from "../";
<Popup
  visible={true}
  style={{ position: "relative", transform: "translate(0,0)", top: 0, left: 0 }}
  type="popup"
>
  <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
</Popup>;
```
