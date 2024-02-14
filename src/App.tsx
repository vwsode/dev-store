import {RouterProvider} from "react-router-dom";
import {router} from "./config/router.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router}>

            </RouterProvider>
        </Provider>
    )
};

export default App;