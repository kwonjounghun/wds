// src/Avatar/ImageWrap.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
var imageWrapObserver;
var ImageWrap = ({ imageUrl, onVisible }) => {
  const [imageState, setImageState] = useState({
    loadedUrl: ""
  });
  const { loadedUrl } = imageState;
  const observerElement = useRef(null);
  useEffect(() => {
    if (imageWrapObserver) {
      const target = observerElement.current;
      if (target) {
        imageWrapObserver.unobserve(target);
        imageWrapObserver = null;
      }
    }
    if (imageUrl !== loadedUrl) {
      handleIntersectionObserver();
    }
  }, [imageUrl, loadedUrl]);
  const handleImageLoad = useCallback((rectWidth) => {
    if (imageUrl && rectWidth) {
      const image = new Image();
      const imageEvent = () => {
        setImageState({
          loadedUrl: imageUrl
        });
        image.removeEventListener("load", imageEvent, false);
        image.removeEventListener("error", imageEvent, false);
        onVisible(true);
      };
      const ImageError = () => {
        setImageState({
          loadedUrl: ""
        });
        onVisible(false);
      };
      image.addEventListener("load", imageEvent, false);
      image.addEventListener("error", ImageError, false);
      image.src = imageUrl;
    }
  }, [imageUrl, imageState, onVisible]);
  const handleIntersectionObserver = useCallback(() => {
    const target = observerElement.current;
    imageWrapObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting || entry.intersectionRatio > 0;
        const rectWidth = entry.target && entry.target.clientWidth;
        if (isIntersecting) {
          handleImageLoad(rectWidth);
          if (target) {
            imageWrapObserver && imageWrapObserver.unobserve(target);
          }
        }
      });
    });
    if (target) {
      imageWrapObserver.observe(target);
    }
  }, [imageUrl, imageState, onVisible]);
  const imageStyleGenerator = useCallback((imageUrl2) => {
    if (!imageUrl2) {
      return {};
    }
    return {
      backgroundImage: `url(${imageUrl2})`
    };
  }, [imageUrl]);
  return /* @__PURE__ */ React.createElement("span", {
    ref: observerElement,
    style: imageStyleGenerator(loadedUrl)
  });
};
ImageWrap.defaultProps = {
  imageUrl: "",
  className: null
};
var ImageWrap_default = ImageWrap;
export {
  ImageWrap_default as default
};
