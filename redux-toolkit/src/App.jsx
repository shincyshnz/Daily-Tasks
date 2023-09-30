import { useEffect, useRef } from "react";
import { CounterUseReducer, Header, ProductList } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/userReducer";

function App() {
  const dispatch = useDispatch();
  const { userDetail } = useSelector((state) => state.user);
  const counterRef = useRef(1);

  useEffect(() => {
    dispatch(fetchUser(counterRef.current));
  }, []);

  const loadUser = ()=>{
    dispatch(fetchUser(++counterRef.current));
  }

  return (
    <>
      {/* <h1>UseReducer Task</h1>
      <CounterUseReducer /> */}
      <Header />
      <button onClick={loadUser}>Add more user</button>
      {/* Userdetails */}
      <pre>{JSON.stringify(userDetail,undefined,4)}</pre>
      <ProductList />
    </>
  );
}

export default App;
