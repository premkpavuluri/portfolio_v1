import {useEffect, useState} from 'react';
import {ReactComponent as JavascriptIcon} from '../assets/javascript.svg';
import {ReactComponent as BashIcon} from '../assets/bash.svg';
import {ReactComponent as NodeJsIcon} from '../assets/nodejs.svg';
import {ReactComponent as HTMLIcon} from '../assets/html.svg';
import {ReactComponent as CSSIcon} from '../assets/css.svg';
import {ReactComponent as JavaIcon} from '../assets/java.svg';
import {ReactComponent as KotlinIcon} from '../assets/kotlin.svg';
import {ReactComponent as PythonIcon} from '../assets/python.svg';
import {ReactComponent as ReactJsIcon} from '../assets/reactjs.svg';
import {ReactComponent as SpringIcon} from '../assets/spring.svg';
import {ReactComponent as DockerIcon} from "../assets/docker.svg";
import {ReactComponent as MongoDBIcon} from "../assets/mongodb.svg";
import {ReactComponent as IconNotFound} from "../assets/404Icon.svg";

const iconComponents = {
  'javascript': JavascriptIcon,
  'bash': BashIcon,
  'nodejs': NodeJsIcon,
  'html': HTMLIcon,
  'css': CSSIcon,
  'java': JavaIcon,
  'kotlin': KotlinIcon,
  'python': PythonIcon,
  'reactjs': ReactJsIcon,
  'spring': SpringIcon,
  'docker': DockerIcon,
  'mongodb': MongoDBIcon,
  'default': IconNotFound
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