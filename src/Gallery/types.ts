export interface Picture {
  id: number;
  src: string;
  preview: string;
}

export interface GalleryProps {
  pictures: Picture[];
  className?: string;
}

export interface MainPictureProps {
  className: string;
  activePicture: Picture;
  prevPicture?: Picture;
  nextPicture?: Picture;
}

export interface PreviewProps {
  className: string;
  pictures: Picture[];
  activePictureIndex: number;
}

export interface NavigationProps {
  className: string;
  disableNextPicture: boolean;
  disablePrevPicture: boolean;
  onNextPicture: () => void;
  onPrevPicture: () => void;
}
