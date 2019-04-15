import React from 'react';
import { render } from 'react-dom';
import Slider from '../src/index.js';
import './demo.css';
const imgList = [
  {
    src: 'http://img1.360buyimg.com/pop/jfs/t1/15178/34/10419/232954/5c872503E5ab8abd6/5d34bc6debdb2597.jpg'
  },
  {
    src: 'http://m.360buyimg.com/babel/jfs/t1/33844/20/841/100060/5ca1a6cfE1175b28b/84763e8261f442ff.jpg'
  },
  {
    src: 'http://img1.360buyimg.com/pop/jfs/t1/19170/38/13699/73633/5ca1b2b5E3d4a2ad7/32be60f8ec8c0bc7.jpg'
  },
  {
    src: 'http://m.360buyimg.com/babel/jfs/t1/28080/14/13165/92168/5c9df20dEc5c8d56d/682d569dcb791dc1.jpg'
  }
]
const ABC = <div className="test-3d">
  <Slider imgList={imgList} delayTime={1} transitionTime={1}  >

  </Slider>
</div>
render(ABC, document.getElementById('root'));
