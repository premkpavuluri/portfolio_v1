import {useEffect, useState} from 'react';
import {ReactComponent as JavascriptIcon} from '../assets/javascript.svg';
import {ReactComponent as BashIcon} from '../assets/bash.svg';

const iconComponents = {
  'javascript': JavascriptIcon,
  'bash': BashIcon,
  'default': JavascriptIcon
};

const useIcon = (name) => {
  const [SvgIcon, setSvgIcon] = useState(null);

  useEffect(() => {
    let icon = iconComponents[name];
    if (!icon) {
      icon = iconComponents['default'];
    }
    setSvgIcon(() => icon);
  }, [name]);

  return { SvgIcon };
};

export default useIcon;