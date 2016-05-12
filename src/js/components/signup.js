import Backbone from "backbone";
import _ from "underscore";
import $ from "jquery";
import { Step1Model, Step2Model } from "../models/signup"

const Step1Template = require('../../templates/step1.html');
const Step2Template = require('../../templates/step2.html');
const Step3Template = require('../../templates/step3.html');
const step1Model = new Step1Model;
const step2Model = new Step2Model;

const Step1 = Backbone.View.extend({
  el: "#main",
  template:  _.template(Step1Template),
  events: {
    "submit #step1Form": "validateStep1"
  },
  validateStep1: function(e) {
    let state = {error:{}};
    e.preventDefault();
    step1Model.set({firstName: $('#step1Form input[name="firstName"]').val(), lastName: $('#step1Form input[name="lastName"]').val()});
    state.error = Object.assign({}, state.error, step1Model.validate());

    if(!Object.keys(state.error).length) {
      window.App.Router.navigate("step2", {trigger: true});
    } else {
      this.render(state);
    }
  },
  render: function(state) {
    const defaultState = {error:{firstName:'', lastName: ''}};
    const model = (state.error) ? Object.assign({}, step1Model.attributes, state) : Object.assign({}, step1Model.attributes, defaultState);
    this.$el.html(this.template(model));
  }
});

const Step2 = Backbone.View.extend({
  el: "#main",
  template:  _.template(Step2Template),
  events: {
    "submit #step2Form": "validateStep2"
  },
  validateStep2: function(e) {
    let state = {error:{}};
    e.preventDefault();
    step2Model.set({address1: $('#step2Form input[name="address1"]').val(), address2: $('#step2Form input[name="address2"]').val(), city: $('#step2Form input[name="city"]').val(), state: $('#step2Form input[name="state"]').val(), zip: $('#step2Form input[name="zipcode"]').val()});
    state.error = Object.assign({}, state.error, step2Model.validate());

    if(!Object.keys(state.error).length) {
      window.App.Router.navigate("step3", {trigger: true});
    } else {
      this.render(state);
    }
  },
  render: function(state) {
    const defaultState = {error:{address1:'', city: '', state: '', zip: ''}};
    const model = (state.error) ? Object.assign({}, step2Model.attributes, state) : Object.assign({}, step2Model.attributes, defaultState);
    this.$el.html(this.template(model));
  }
});

const Step3 = Backbone.View.extend({
  el: "#main",
  template:  _.template(Step3Template),
  render: function() {
    const model = Object.assign({}, step1Model.attributes, step2Model.attributes);
    this.$el.html(this.template(model));
  }
})

export { Step1, Step2, Step3 };
