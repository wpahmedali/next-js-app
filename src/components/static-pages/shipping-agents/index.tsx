import Buttons from './components/Buttons';
import DarEsSalaam from './components/DarEsSalaam';
import Durban from './components/Durban';
import Karachi from './components/Karachi';
import Kenya from './components/Kenya';
import Namibia from './components/Namibia';
import Sharjah from './components/Sharjah';
import Title from './components/Title';
import UAE from './components/UAE';
import UK from './components/UK';
import Uganda from './components/Uganda';
import Zamibia from './components/Zamibia';

const ShippingAgents = () => {
  return (
    <>
      <div data-scroll-container>
        <Title />
        <Buttons />
        <DarEsSalaam />
        <Karachi />
        <UAE />
        <Sharjah />
        <Durban />
        <Kenya />
        <Zamibia />
        <Namibia />
        <UK />
        <Uganda />
      </div>
    </>
  );
};
export default ShippingAgents;
