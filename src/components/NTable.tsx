import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ColumnDef } from '@/components/Types';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  captionClassName?: string;
  headerClassName?: string;
  headerRowClassName?: string;
  headerCellClassName?: string;
  bodyClassName?: string;
  bodyRowClassName?: string;
  bodyCellClassName?: string;
  caption?: string;
  columnDef: ColumnDef[] | any[];
  data: any[];
}

export const NTable = (props: Props) => {
  const { columnDef, caption = '', data, className = '', captionClassName = '', headerClassName = '', headerRowClassName = '', headerCellClassName = '', bodyClassName = '', bodyRowClassName = '', bodyCellClassName = '' } = props;

  return (
    <Table className={cn(`border border-border bg-card rounded ${className}`)}>
      {caption && <TableCaption className={captionClassName}>{caption}</TableCaption>}
      <TableHeader className={cn(`[&_tr]:border-0 border-border ${headerClassName}`)}>
        <TableRow className={headerRowClassName}>
          {columnDef.map((col: any, index: number) => (
            <TableHead key={index} className={`px-3 py-3 h-auto border-b border-border ${headerCellClassName} ${col.className}`}>
              {col.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className={bodyClassName}>
        {data.map((row: any, index: number) => {
          return (
            <TableRow key={index} className={cn(`[&_tr]:border-0 border-border ${bodyRowClassName}`)}>
              {columnDef.map((col: any, colIndex: number) => {
                const CustomComponent = col.component;
                return (
                  <TableCell key={index + '' + colIndex} className={`px-3 py-3 border-b border-border ${bodyCellClassName} ${col.className}`}>
                    {!col.component ? row[col.name] : <CustomComponent row={row} col={col} {...props} />}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
