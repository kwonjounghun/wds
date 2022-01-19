import React, { useCallback, useEffect, useRef, useState } from 'react';

interface IImageProps {
  /** image Url */
  imageUrl?: string;

  /** classnames */
  className?: string;

  /** image visible/hidden callback function  */
  onVisible: (visible: boolean) => void;
}

interface IImageState {
  /** loaded image url */
  loadedUrl?: string;
}

let imageWrapObserver: IntersectionObserver | null;

const ImageWrap = ({ imageUrl, onVisible }: IImageProps) => {
  const [imageState, setImageState] = useState<IImageState>({
    loadedUrl: '',
  });
  const { loadedUrl } = imageState;
  const observerElement = useRef<HTMLSpanElement>(null);

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
  }, [imageUrl, loadedUrl]); // imageurl, 로딩된 loadedUrl이 변경이 있는경우에 대해서만 다시 이미지를 로딩하도록 수정

  /**
   * image 로딩이 성공/실패할 경우에 대한 처리를 위한 함수
   * @param {number} rectWidth 로딩할려는 DOM의 width값을 있는경우만 이미지로딩 처리하기 위한 값
   */
  const handleImageLoad = useCallback<(rectWidth: number) => void>(
    (rectWidth) => {
      if (imageUrl && rectWidth) {
        const image = new Image();
        const imageEvent = () => {
          setImageState({
            loadedUrl: imageUrl,
          });
          image.removeEventListener('load', imageEvent, false);
          image.removeEventListener('error', imageEvent, false);

          onVisible(true);
        };

        const ImageError = (/*ev: ErrorEvent*/) => {
          setImageState({
            loadedUrl: '',
          });
          onVisible(false);
        };

        image.addEventListener('load', imageEvent, false);
        image.addEventListener('error', ImageError, false);
        image.src = imageUrl;
      }
    },
    [imageUrl, imageState, onVisible],
  );

  /**
   * viewport 사이의 교차점내 변화를 감지했을 경우만 이미지를 로딩하기 위한 함수
   */
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

  /**
   * BackgroundImage url 속성을 생성해주는 함수
   * @param {string} imageUrl image url 정보
   */
  const imageStyleGenerator = useCallback<(imageUrl?: string) => object>((imageUrl) => {
    // 이미지 경로가 없을 때 표시하지 않는다.
    if (!imageUrl) {
      return {};
    }

    return {
      backgroundImage: `url(${imageUrl})`,
    };
  }, [imageUrl]);

  return <span ref={observerElement} style={imageStyleGenerator(loadedUrl)} />;
};

ImageWrap.defaultProps = {
  imageUrl: '',
  className: null,
};

export default React.memo(ImageWrap);
