import React from "react";

const sections = [
  {id: 'about', title: 'About'},
  {id: 'skills', title: 'Skills'},
  {id: 'experience', title: 'Experience'},
  {id: 'education', title: 'Education'},
  {id: 'projects', title: 'Projects'},
  {id: 'contact', title: 'Contact'}
];

const NavBar = ({onClick, activeSection}) => {
  const buttons = sections.map((section) => (
      <button
          key={section.id}
          className={"nav-button"}
          onClick={() => onClick(section.id)}
      >
        {section.title}
      </button>
  ));

  return (<div className={"nav-bar"}>{buttons}</div>);
}

export default NavBar;