import React from "react";

const useKeyPress = (callback) => {
  const [keyPressed, setKeyPressed] = React.useState();

  React.useEffect(() => {
    function handleKeyDown({ key }) {
      if (keyPressed !== key && key.length === 1) {
        setKeyPressed(key);
        callback && callback(key);
      }
    }

    function handleKeyUp(event) {
      setKeyPressed(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
