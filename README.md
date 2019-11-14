# DatePicker
  Vue插件Demo

## 使用 
  ```js
  <template>
    <DatePicker v-model="date" />
  </template>

  <script>
  import "./DatePicker.css"
  import { DatePicker } from "./DatePicker.js";
  import Vue from "vue";
  Vue.use(DatePicker);
  export default {
    data() {
      return {
        date: ""
      };
    },
    watch: {
      date(val, val2) {
        console.log(val);
      }
    }
  };
  </script>
  ```
