import React, { Component, Fragment } from 'react'
import './App.css';
import img from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dt: new Date(),
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ dt: new Date() })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const Tim = () => {
      return (<h3>{this.state.dt.toLocaleTimeString('en-US')}</h3>);
    }
    return (
      <Tim />
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dt: new Date(),
      show: false,
      x: 'Show',
      Person: {
        fullName: 'Wassim Ben Taleb',
        bio: 'This is my bio',
        imgSrc: img,
        prefession: 'Software Developer',
      }
    }
  }
  // componentDidMount(){
  //   this.interval= setInterval(()=>{
  //     this.setState({dt: new Date()})
  //   },1000)
  // }
  // componentWillUnmount(){
  //   clearInterval(this.interval);
  // }
  aff = () => {
    if (this.state.show === false) {
      this.setState({ show: true });
      this.setState({ x: 'Hide' });
    }
    else if (this.state.show === true) {
      this.setState({ show: false });
      this.setState({ x: 'Show' });
    }
  }

  render() {
    const Profile = () => {
      return (
        <div className="afficher">
          <h1>{fullName}</h1>
          <h3>{bio}</h3>
          <h3>{prefession}</h3>
          <img src={imgSrc} alt="mypic" style={{ width: '30%' }} />
        </div>
      )
    }
    // const Tim=()=>{
    //   return(<h3>{this.state.dt.toLocaleTimeString('en-US')}</h3>);
    // }
    const { fullName, bio, imgSrc, prefession } = this.state.Person;
    return (
      <Fragment>
        <div className='cent'>
          {this.state.show ? <Profile /> : null}
          {this.state.show ? <Timer /> : <h3>Page firstly loaded: {this.state.dt.toLocaleTimeString('en-US')}</h3>}
          <div><button type="button" className="btn btn-secondary" onClick={this.aff}>{this.state.x}</button></div>
        </div>
      </Fragment>
    )
  }
}

