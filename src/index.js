import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Skills from "./components/my-skills";
import References from "./components/references";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import SidebarWithImage from "./components/sidebar.with.image";
import MenuIcon from "./components/menu.icon";
import PageContent from "./components/page.content";
import HiddenSidebar from "./components/hidden.sidebar";
import { Link } from "react-router-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavVisible: false
    };
  }

  toggleNavVisibility = () => {
    this.setState({
      isNavVisible: !this.state.isNavVisible
    });
  };
  render() {
    return (
      <div>
        <SidebarWithImage />
        <MenuIcon toggleNavVisibility={this.toggleNavVisibility} />
        <HiddenSidebar
          toggleNavVisibility={this.toggleNavVisibility}
          isNavVisible={this.state.isNavVisible}
        />
        <div className="marginLeft">
          <PageContent />
          <Header name="Juraj Sarissky" role="UI & UX Developer" />
          <Portfolio />
          <About />
          <Skills skill1="JavaScript ES6" skill2="React" skill3="Redux" />
          <References />
          <Contacts
            address="Address: Bratislava, Slovakia"
            phone="Phone: 0918 123 456"
            email="sarissky.juraj@gmail.com"
          />
          <Footer />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// hedaer + skills + contacts cez props
// references cez state & map
