import Image from 'next/image';

const DayState = ({ day }: { day: boolean | undefined }) => {
  let image: [string, string, number?, number?] = ['/images/mark.svg', 'gray mark', 12, 12];

  if (day === true) image = ['/images/check.svg', 'green mark', 24, 24];
  if (day === false) image = ['/images/x.svg', 'red mark', 24, 24];

  const [src, alt, sizeWidth, sizeHeight] = image;

  return (
    <div className={'flex items-center justify-center h-9'}>
      <Image src={src} alt={alt} width={sizeWidth} height={sizeHeight} />
    </div>
  );
};

export default DayState;
