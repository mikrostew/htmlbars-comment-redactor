import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  layout: hbs('<p id="comment"><!-- I have important things to say in this comment --></p>')
});
