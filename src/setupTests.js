import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// jest checks for this file and will run it first
Enzyme.configure({ adapter: new Adapter() });
