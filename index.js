import Backbone from "backbone";
import { Step1Model, Step2Model } from "./src/js/models/signup";
import { Step1, Step2, Step3 } from "./src/js/components/signup";

const MainRouter = Backbone.Router.extend({
  routes: {
    '': 'step1',
    'step2': 'step2',
    'step3': 'step3'
  },
  step1: () => {
    const step1Model = new Step1Model;
    const Step1View = new Step1({model: step1Model});
    Step1View.render();
  },
  step2: () => {
    const step2Model = new Step2Model;
    const Step2View = new Step2({model: step2Model});
    Step2View.render();
  },
  step3: () => {
    const Step3View = new Step3;
    Step3View.render();
  }
});

window.App = {};
window.App.Router = new MainRouter();

Backbone.history.start({pushState: true, root: '/example/'});
