import _ from "underscore";
import $ from "jquery";
import {Step2Model} from "../models/signup";
import BaseView from "./Base/baseView";

const Step1Template = require("../../templates/step1.html");
const Step2Template = require("../../templates/step2.html");
const Step3Template = require("../../templates/step3.html");

const step2Model = new Step2Model;
let step1Model;

class Step1 extends BaseView {
  constructor(options) {
    super(options);
    this.template = _.template(Step1Template);
  }

  get events() {
    return {
      "submit #step1Form": "validateStep1"
    }
  }

  validateStep1(e) {
    e.preventDefault();
    this.model.set({firstName: $("#step1Form input[name='firstName']").val(), lastName: $("#step1Form input[name='lastName']").val()});

    let validationErr = this.model.validate();
    this.setState({error: (validationErr) ? validationErr : this.defaultState.error});

    if(this.model.isValid()) {
      window.App.Router.navigate("step2", {trigger: true});
    } else {
      this.render();
    }
  }

  render() {
    const model = Object.assign({}, this.model.attributes, this.state);
    this.$el.html(this.template(model));
  }
}

class Step2 extends BaseView {
  constructor(options) {
    super(options);
    this.template = _.template(Step2Template);
  }

  get events() {
    return {
      "submit #step2Form": "validateStep2"
    }
  }

  validateStep2(e) {
    e.preventDefault();
    this.model.set({address1: $("#step2Form input[name='address1']").val(), address2: $("#step2Form input[name='address2']").val(), city: $("#step2Form input[name='city']").val(), state: $("#step2Form input[name='state']").val(), zip: $("#step2Form input[name='zipcode']").val()});

    let validationErr = this.model.validate();
    this.setState({error: (validationErr) ? validationErr : this.defaultState.error});

    if(this.model.isValid()) {
      window.App.Router.navigate("step3", {trigger: true});
    } else {
      this.render();
    }
  }

  render() {
    const model = Object.assign({}, this.model.attributes, this.state);
    this.$el.html(this.template(model));
  }
}

class Step3 extends BaseView {
  constructor(options) {
    super(options);
    this.template = _.template(Step3Template);
  }

  render() {
    this.$el.html(this.template());
  }
}

export {Step1, Step2, Step3};
