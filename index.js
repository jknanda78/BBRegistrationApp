import Backbone from "backbone"
import { Step1, Step2, Step3 } from "./src/js/components/signup"

const MainRouter = Backbone.Router.extend({
  routes: {
    '': 'step1',
    'step2': 'step2',
    'step3': 'step3'
  },
  step1: () => {
    const Step1View = new Step1;
    Step1View.render(Step1View);
  },
  step2: () => {
    const Step2View = new Step2;
    Step2View.render(Step2View);
  },
  step3: () => {
    const Step3View = new Step3;
    Step3View.render(Step3View);
  }
});

window.App = {};
window.App.Router = new MainRouter();

Backbone.history.start({pushState: true, root: '/example/'});
