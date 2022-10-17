import CompOne from './CompOne/CompOne';
import CompTwo from './CompTwo/CompTwo';
import CompThree from './CompThree/CompThree';

export const App = () => {
  return (
    <CompOne>
      <CompTwo />
      <CompThree />
    </CompOne>
  );
};
