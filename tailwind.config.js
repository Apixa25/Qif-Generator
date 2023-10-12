/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";
initTE({ Dropdown, Ripple });

