import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faPlay,
  faPause,
  faForward,
  faBackward,
  faMouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// set up font awesome
library.add(
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faPlay,
  faPause,
  faForward,
  faBackward,
  faMouse
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
