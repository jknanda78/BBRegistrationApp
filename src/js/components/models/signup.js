import Backbone from "backbone";
import _ from "underscore";
import BBValidation from "backbone-validation";

Object.assign(Backbone.Model.prototype, BBValidation.mixin);

const Step1Model = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: ''
  },
  validation: {
    firstName: {
      required: true
    },
    lastName: {
      required: true
    }
  }
});

const Step2Model = Backbone.Model.extend({
  defaults: {
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  },
  validation: {
    address1: {
      required: true
    },
    city: {
      required: true
    },
    state: {
      required: true
    },
    zip: {
      required: true
    }
  }
});

export { Step1Model, Step2Model };
