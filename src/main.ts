import { createApp } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import ApolloClient from "apollo-boost";
import directives from "@/directives";
import App from "./App.vue";
import router from "./router";
import "./assets/main.scss";
import { KEY } from "./shared/store/vuex/index";
import { STORE } from "./shared/store/vuex/store";

const apolloClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: "Bearer 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",
  },
});

const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.provide(DefaultApolloClient, apolloClient);

app.use(router);

app.use(STORE, KEY);

app.mount("#app");
