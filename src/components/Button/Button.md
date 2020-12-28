### Primary

```js
<Button type="primary">Primary</Button>
```

### Secondary

```js
<Button type="secondary">Secondary</Button>
```

### Outline

```js
<Button type="outline">Outline</Button>
```

### Outline-primary

```js
<Button type="outline-primary">Outline-primary</Button>
```

### Link

```js
<Button type="link">Link</Button>
```

### Link-primary

```js
<Button type="link-primary">Link-primary</Button>
```

### Disabled: true

```js
<Button type="primary" disabled>
  Disabled
</Button>
```

### Rounded: true

```js
<Button type="primary" rounded>
  Войти
</Button>
```

### Width: true

```js
<Button type="primary" fullWidth>
  Войти
</Button>
```

### Icon left

```js
import { Icon } from "../";
<Button
  iconPosition="left"
  icon={<Icon name="close" color="contrast" />}
  type="primary"
>
  Закрыть
</Button>;
```

### Icon right

```js
import { Icon } from "../";
<Button
  iconPosition="right"
  icon={<Icon name="close" color="contrast" />}
  type="primary"
>
  Закрыть
</Button>;
```

### Icon right overlay

```js
import { Icon } from "../";
<Button
  overlay={<input type="file" />}
  icon={<Icon name="close" iconPosition="right" color="contrast" />}
  type="primary"
>
  Закрыть
</Button>;
```

### Icon loading

```js
<Button loadingData type="primary">
  Закрыть
</Button>
```
