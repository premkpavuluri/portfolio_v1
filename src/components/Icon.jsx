import React from 'react';
import useIcon from "../hooks/useIcon";

const Icon = ({ name }) => {
  const { SvgIcon} = useIcon(name);
  if (!SvgIcon) return <div>Loading...</div>;

  return <SvgIcon className="icon"/>;
};

export default Icon;