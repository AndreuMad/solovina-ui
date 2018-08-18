import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);
configure({ adapter: new Adapter() });

// Tip: function expression used to keep context,
// do not rewrite it to arrow func

beforeEach(function beforeEachHook() {
  // eslint-disable-next-line no-invalid-this
  this.sandbox = sinon.sandbox.create();
});

afterEach(function afterEachHook() {
  // eslint-disable-next-line no-invalid-this
  this.sandbox.restore();
});
