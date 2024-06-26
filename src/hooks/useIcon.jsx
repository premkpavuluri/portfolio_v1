import {useEffect, useState} from 'react';

const useIcon = (name) => {
  const [SvgIcon, setSvgIcon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    import(`../assets/${name}.svg`)
      .then((icon) => {
        setSvgIcon(() => icon.ReactComponent);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error loading icon: ${name}`, error);
        setError(error);
        setLoading(false);
      });
  }, [name]);

  return { SvgIcon, loading, error };
};

export default useIcon;