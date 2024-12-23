import ClassNames from 'classnames';

import soybeanAvatar from '@/assets/imgs/soybean.jpg';

const SoybeanAvatar: FC<React.ComponentProps<'div'>> = memo(({ className, ...props }) => {
  return (
    <div
      {...props}
      className={ClassNames('size-72px  overflow-hidden rd-1/2', className)}
    >
      <img
        className="size-full"
        src={soybeanAvatar}
      />
    </div>
  );
});

export default SoybeanAvatar;
