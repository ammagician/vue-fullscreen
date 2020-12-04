const getFullscreenElement = function() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
};

export const toggleFullscreen = function(element) {
  element = element || document.querySelector("body");
  const isFull = !!getFullscreenElement();
  if (isFull) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  } else {
    element.setAttribute("oldWidth", element.scrollWidth);
    element.setAttribute("oldHeight", element.scrollHeight);

    let fn = "";
    if (element.requestFullscreen) {
      fn = "requestFullscreen";
    } else if (element.mozRequestFullScreen) {
      fn = "mozRequestFullScreen";
    } else if (element.webkitRequestFullscreen) {
      fn = "webkitRequestFullscreen";
    } else if (element.msRequestFullscreen) {
      fn = "msRequestFullscreen";
    }
    element[fn]().catch(() => {
      console.warn(
        "multiple instances, press f11 trgger fullscreen one time only"
      );
    });
  }
};

export const initFullscreen = function(element, callback) {
  const fullscreenchange = function() {
    callback && callback(!!getFullscreenElement());
  };

  const overwriteF11 = function(e) {
    if (e.keyCode === 122) {
      e.preventDefault();
      e.stopPropagation();
      toggleFullscreen(element);
    }
  };

  document.addEventListener("fullscreenchange", fullscreenchange, false);
  document.addEventListener("keydown", overwriteF11, false);

  return () => {
    document.removeEventListener("fullscreenchange", fullscreenchange);
    document.removeEventListener("keydown", overwriteF11);
  };
};
