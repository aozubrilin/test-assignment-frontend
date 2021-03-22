import * as React from 'react';
import { setTag } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/reducer/reducer';
import { Data } from '../../store/types';

const ImagesList = () => {
  const dispatch = useDispatch();
  const dataImages = useTypedSelector<Array<Data>>((state) => state.data);
  const isGroup = useTypedSelector<boolean>((state) => state.isGroup);

  interface GroupedDataImagesByTag {
    [key: number]: Data;
  }

  const groupedDataImagesByTag = (items: Data[]): GroupedDataImagesByTag => {
    return items.flat().reduce((itemsMemo, item) => {
      (itemsMemo[item.tag] = itemsMemo[item.tag] || []).push(item);
      return itemsMemo;
    }, {});
  };

  const itemImagesTemlate = (items: Data[]) => {
    return items.map((images, index) => {
      return (
        <div className={`images__item`} key={index}>
          {imagesTemlate(images)}
        </div>
      );
    });
  };

  const imagesTemlate = (images, tag?: string): JSX.Element => {
    return images.map((image, index) => {
      return (
        <img
          key={`${image.id}-${index}`}
          src={image.url}
          width={image.width}
          height={image.height}
          title={image.title}
          onClick={() => dispatch(setTag(image.tag))}
        />
      );
    });
  };

  const groupedItemImagesTemlate = (items: Data[]) => {
    const groupDataImages = groupedDataImagesByTag(items);
    return Object.entries(groupDataImages).map(([tag, array], index) => (
      <div
        className={`images__item images__item--grouped`}
        key={`${index}-${tag}`}
      >
        <h2 className="images__tag">#{tag}</h2>
        {imagesTemlate(array, tag)}
      </div>
    ));
  };

  return (
    <section className="images">
      <div className="images__wrapper">
        {isGroup
          ? groupedItemImagesTemlate(dataImages)
          : itemImagesTemlate(dataImages)}
      </div>
    </section>
  );
};

export default ImagesList;
