Example of component what works with mobx state.
```jsx
import AppStore from '../../store/AppStore';
import {Provider} from 'mobx-react';

const appStore = new AppStore({});
<Provider appStore={appStore}>
    <ObserverComponent/>
</Provider>
```
