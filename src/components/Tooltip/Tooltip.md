### Tooltip

```js
import { Button, Typography } from "../";
<Tooltip
  position="left"
  info={
    <Typography type="text" color="text">
      Описание
    </Typography>
  }
>
  <Button>Left</Button>
</Tooltip>;
```

```js
import { Button, Image } from "../";
<Tooltip
  position="left"
  info={
    <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
  }
>
  <Button>Left</Button>
</Tooltip>;
```

```js
import { Button, Image } from "../";
<Tooltip
  position="right"
  info={
    <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
  }
>
  <Button>Right</Button>
</Tooltip>;
```

```js
import { Button, Image } from "../";
<Tooltip
  info={
    <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
  }
  position="top"
>
  <Button>Top</Button>
</Tooltip>;
```

```js
import { Button, Image } from "../";
<Tooltip
  position="bottom"
  info={
    <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
  }
>
  <Button>Bottom</Button>
</Tooltip>;
```

```js
import { Button, Image } from "../";
<Tooltip
  visible
  type="tooltip-close"
  position="bottom"
  info={
    <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
  }
>
  <Button>Bottom</Button>
</Tooltip>;
```
