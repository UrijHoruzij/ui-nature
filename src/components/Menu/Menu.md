### Menu

```js
import { Icon } from "../";
const menu = [
  {
    id: 1,
    name: "Файлы",
    icon: "close",
    onClick: () => {
      console.log("Файлы");
    },
  },
  {
    id: 2,
    name: "Последние",
    icon: "close",
    onClick: () => {
      console.log("Последние");
    },
  },
  {
    id: 3,
    name: "Фотографии",
    icon: "close",
    onClick: () => {
      console.log("Фотографии");
    },
  },
];
<Menu menu={menu} activItem={1} />;
```
