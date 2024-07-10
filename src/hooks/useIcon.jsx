import {useEffect, useState} from 'react';
import {ReactComponent as JavascriptIcon} from 'assets/icons/javascript.svg';
import {ReactComponent as BashIcon} from 'assets/icons/bash.svg';
import {ReactComponent as NodeJsIcon} from 'assets/icons/nodejs.svg';
import {ReactComponent as HTMLIcon} from 'assets/icons/html.svg';
import {ReactComponent as CSSIcon} from 'assets/icons/css.svg';
import {ReactComponent as JavaIcon} from 'assets/icons/java.svg';
import {ReactComponent as KotlinIcon} from 'assets/icons/kotlin.svg';
import {ReactComponent as PythonIcon} from 'assets/icons/python.svg';
import {ReactComponent as ReactJsIcon} from 'assets/icons/reactjs.svg';
import {ReactComponent as SpringIcon} from 'assets/icons/spring.svg';
import {ReactComponent as DockerIcon} from "assets/icons/docker.svg";
import {ReactComponent as MongoDBIcon} from "assets/icons/mongodb.svg";
import {ReactComponent as IconNotFound} from "assets/icons/404Icon.svg";
import {ReactComponent as CompanyIcon} from "assets/icons/company.svg";
import {ReactComponent as EmailIcon} from "assets/icons/email.svg";

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
  'company': CompanyIcon,
  'email': EmailIcon,
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