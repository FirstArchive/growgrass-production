import type { CascaderProps } from "ant-design-vue";
import type { ShowSearchType } from "ant-design-vue/es/cascader";
const options: CascaderProps["options"] = [
  {
    value: "1cm",
    label: "1cm",
    children: [
      {
        value: "1cmSD",
        label: "1cmSD  90.-",
      },
      {
        value: "1cmAA",
        label: "1cmAA 119.-",
      },
    ],
  },
  {
    value: "2cm",
    label: "2cm",
    children: [
      {
        value: "2cmAA",
        label: "2cmAA 169.-",
      },
      {
        value: "2cmPM",
        label: "2cmPM 189.-",
      },
    ],
  },
  {
    value: "3cm",
    label: "3cm",
    children: [
      {
        value: "3cmSD",
        label: "3cmSD 219.-",
      },
      {
        value: "3cmAA",
        label: "3cmAA 249.-",
      },
      {
        value: "3cmPM",
        label: "3cmPM 319.-",
      },
    ],
  },
  {
    value: "3.5cm",
    label: "3.5cm",
    children: [
      {
        value: "3.5cm",
        label: "3.5cm 299.-",
      },
    ],
  },
];

const filter: ShowSearchType["filter"] = (inputValue, path) => {
  return path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );
};

export { options, filter };
