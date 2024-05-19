import style from './App.module.scss';
import Header from './header/Header';
import Main from './main/Main';
import Price from './price/Price';
import Product from './product/Product';

function App() {
  return (
    <div className={style.App}>
      <div><Header /></div>
      <div ><Main /></div>
      <div className={style.product}><Product /></div>
      <div ><Price /></div>


    </div>
  );
}

export default App;
