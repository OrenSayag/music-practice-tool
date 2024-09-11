import { ComponentPropsWithoutRef, FC } from 'react';
import {cn} from "../../services/utilities.ts";
import {Button} from "../button";
import {useRandomScaleModePos} from "./methods/use-random-scale-mode-pos.ts";

interface Props extends ComponentPropsWithoutRef<'div'> {
  className?: string;
}

const tableHeaders = [
    'Scale',
    'Position',
    'Mode',
]

const cellCn = 'border border-slate-500 p-4 whitespace-pre'

export const RandomScaleModePosGenerator: FC<Props> = ({ className, ...props }) => {
    const { res,gen }  = useRandomScaleModePos()
  return (
    <>
      <div className={cn('flex flex-col items-center justify-center gap-3 py-3',className)} {...props}>
        <Button onClick={gen}>Generate</Button>
          {res && <table className={cn(cellCn)}>
              <thead>
              <tr>
                  {tableHeaders.map(h=><th key={h}
                                           className={cellCn}
                  >{h}</th>)}
              </tr>

              </thead>
              <tbody>
              <tr>
                  <th
                      className={cellCn}
                  >
                      {res.scale}
                  </th>
                  <th
                      className={cellCn}
                  >
                      {res.position}
                  </th>
                  <th
                      className={cn(cellCn, 'w-36 max-w-36')}
                  >
                      {res.mode.name}
                  </th>
              </tr>
              </tbody>
          </table>}
      </div>
    </>
  );
};
