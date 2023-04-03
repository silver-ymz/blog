import DefaultTheme from "vitepress/theme-without-fonts";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import Links from "./components/Links.vue";
import MyLayout from "./components/MyLayout.vue";
import "./custom.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    // register global components
    app.component("Archives", Archives);
    app.component("Tags", Tags);
    app.component("Links", Links);
  },
};
