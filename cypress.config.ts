import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout:20000,
  e2e: {
    baseUrl:"https://www.clicdata.com/dashboards/balance-sheet",
  },
});
