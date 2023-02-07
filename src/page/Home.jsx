import React from "react";
import dynamicApi from "../utils/dynamicApi";
import { actions } from "../utils/actions";
import LoaderComponent from "../components/Loader/LoaderComponent";

const _page = "user";

const Home = () => {
  // const list = dynamicApi(_page)
  // const {get, post, put,getById, remove} = actions(dynamicApi(_page))
  // console.log(get, post, put,getById, remove)
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
