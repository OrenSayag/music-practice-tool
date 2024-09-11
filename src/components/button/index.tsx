import { ComponentPropsWithoutRef, FC } from 'react';
import {cn} from "../../services/utilities.ts";

interface Props extends ComponentPropsWithoutRef<'button'> {
  className?: string;
}

export const Button: FC<Props> = ({ className, ...props }) => {
  return (
    <>
      <button className={cn('border border-gray-7001 px-3 py-2 rounded-md',className)} {...props} />
    </>
  );
};
