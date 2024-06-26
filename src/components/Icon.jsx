import React from 'react';
import useIcon from "../hooks/useIcon";

const Icon = ({ name }) => {
  const { SvgIcon, loading, error } = useIcon(name);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading icon</div>;
  if (!SvgIcon) return <div>Loading...</div>;

  return <SvgIcon/>;
};

// function Icon({ name, size = 24, color = 'black' }) {
//   const path = `../assets/${name}.svg`;
//   console.log(`path: ${path}`)
//
//   return (
//     <svg width={size} height={size}>
//       <use href={path} fill={color} />
//     </svg>
//   );
// }

export default Icon;