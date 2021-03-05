import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/store'; 
import Category from './pages/CatForm/catform';
function App() {
  return (
    <div>
      <Provider store={store}>
        <Category />
      </Provider>
    </div>
  );
}

export default App;
