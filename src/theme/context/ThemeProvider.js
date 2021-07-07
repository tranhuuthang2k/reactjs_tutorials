import React from 'react';
import ThemeContext from './ThemeContext';
import PropTypes from 'prop-types';

const themeLight = [
  '--border: rgba(0,0,0,.2)',
  '--shadow: #000',
  '--heading: rgba(255,100,0,1)',
  '--main: #1d8f13',
  '--text: #000',
  '--textAlt: #fff',
  '--inactive: rgba(0,0,0,.3)',
  '--background: #fff'
];

const themeDark = [
  '--border: rgba(255,255,255,.1)',
  '--shadow: #000',
  '--heading: rgba(255,255,5,.9)',
  '--main: #79248f',
  '--text: rgb(255, 255, 255)',
  '--textAlt: #fff',
  '--inactive: rgba(255,255,255,.3)',
  '--background: #2D2D2D'
];

class ThemProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false // nen trang va nguoc lai
    }
  }

  // goi no o trong componentDidMount - componentDidUpdate
  applyTheme = (theme) => {
    // css cho toan bo trang
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
  }

  // viet ham de chuyen doi mau sac
  // khi nguoi dung bam chon mau sac giao dien
  toggle = () => {
    // css cho the body
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';

    // cap nhat lai state
    this.setState(state => ({ ...this.state, dark: !state.dark }));
    
    // luu gia tri state dark vao local storage
    window.localStorage.setItem('darkTheme', !this.state.dark);
  }

  componentDidMount() {
    // khi ma render giao dien lan dau - mounting (can biet la dang co giao dien mau gi)
    const lastTheme = window.localStorage.getItem('darkTheme');
    // dang du lieu string ko phai boolean
    if(lastTheme === 'true'){
      // nen mau gi ??? : mau toi
      // cap nhat lai sate
      this.setState({...this.state, dark: true});
    } else {
      this.setState({...this.state, dark: false});
    }
  }

  // khi nguoi dung bam chon mau nen
  componentDidUpdate() {
    // khong the cap nhat state
    // cap nhat lai thang vao giao dien
    const theme = window.localStorage.getItem('darkTheme');
    if(theme === 'true'){
      // chon nen mau den
      this.applyTheme(themeDark);
    } else {
      // chon nen mau trang
      this.applyTheme(themeLight);
    }
  }

  render() {
    return(
      <ThemeContext.Provider value={{ dark: this.state.dark, toggle: this.toggle }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
ThemProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemProvider;