import React ,{Fragment} from 'react';
import { Route, Routes } from 'react-router-dom';

import AddProducts from '../AddProducts/AddProducts';
import Shop from '../shop/Shop';
import SingleProducts from '../SingleProducts/SingleProducts';


function RoutesMain() {
  return (
      <Fragment>
        <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/products' element={<Shop/>}></Route>
            <Route path='/AddProducts' element={<AddProducts/>}></Route>
            <Route path='/singleProduct/:id' element={<SingleProducts/>}></Route>
            <Route path='*' element="page note found"></Route>
        </Routes>
    </Fragment>
  )
}

export default RoutesMain