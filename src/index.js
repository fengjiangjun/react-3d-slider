import React from 'react';
import './slider.css';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.index = 1;
    this.container = React.createRef();
  }
  componentDidMount () {
    const delayTime = this.props.delayTime * 1000 || 2000;
    this.timer = setTimeout(this.loop.bind(this), delayTime);
    let parent = this.container.current.parentNode;
    //获取父容器的宽度
    let width = this.props.width || parent.clientWidth;
    //获取父容器的高度。
    let height = this.props.height || parent.clientHeight;
    let imgs = this.container.current.children;
    imgs[0].style.transform = `translateZ(${height / 2}px)`;
    imgs[2].style.transform = `translateZ(-${height / 2}px) rotateX(180deg)`;
    this.container.current.style.width = width + 'px';
    this.container.current.style.height = height + 'px';
    this.container.current.addEventListener('transitionend', () => {
      this.timer = setTimeout(this.loop.bind(this), delayTime);
    })
  }
  loop () {
    this.container.current.style.transform = 'rotateX(' + ((this.props.direction || 1) * this.index * 90) + 'deg)';
    this.container.current.style.transition = (this.props.transitionTime || 2) + 's';
    this.index++;
  }
  render () {
    return <div className='container' ref={this.container}>
      {this.props.imgList.map(item => {
        return <img className='img-item' src={item.src} />
      })}
    </div>
  }
}
