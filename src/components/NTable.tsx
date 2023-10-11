import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Props {
  className?: string;
  caption?: string;
  columnDef: any[];
  data: any[];
}

export const NTable = (props: Props) => {
  const { columnDef, caption = '', data, className = '' } = props;

  return (
    <Table className={`border border-border bg-card rounded ${className}`}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader className="[&_tr]:border-0 border-border">
        <TableRow>
          {columnDef.map((col: any, index: number) => (
            <TableHead key={index} className={`px-3 py-3 h-auto border-b border-border ${col.className}`}>
              {col.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: any, index: number) => {
          return (
            <TableRow key={index} className="[&_tr]:border-0 border-border">
              {columnDef.map((col: any, colIndex: number) => {
                const CustomComponent = col.component;
                return (
                  <TableCell key={index + '' + colIndex} className={`px-3 py-3 border-b border-border ${col.className}`}>
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
