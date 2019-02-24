import  { WebClient } from "./modules/WebClient"
import registerServiceWorker from "./registerServiceWorker";

loadClient();
registerServiceWorker();

function loadClient() {
    let webClient = new WebClient;
    webClient.initialize();
    webClient.load();
}