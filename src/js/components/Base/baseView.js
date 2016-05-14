import {View} from "backbone";
import $ from "jquery";

class BaseView extends View {
  constructor(options) {
    super(options);
    this.setElement($('#main'), true);
    this.defaultState = {
      error: {}
    };
    this.state = Object.assign({}, this.defaultState);
  }

  setState(obj, clbk) {
    if(typeof obj === 'object' && !Object.keys(obj).length) {
      return;
    }
    this.state = Object.assign({}, this.defaultState, obj);
    if(typeof clbk === "function") {
      clbk();
    }
  }
}

export default BaseView;
