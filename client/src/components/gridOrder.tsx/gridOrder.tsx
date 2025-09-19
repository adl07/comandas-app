import type { OrdersInterface } from "../../interfaces/orders";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { Button } from "../ui/button";
import "./gridOrder.css";
import { LabelEstado } from "../ui/labelEstado";

export const GridOrder = (
  { dataProps }: { dataProps: OrdersInterface[] },
  sort?: string
) => {
  console.log("dataProps", dataProps);

  const data = { nodes: dataProps };
  const theme = useTheme([
    getTheme(),
    {
      Table: `
          height: 100%;
          --data-table-library_grid-template-columns:  30% repeat(2, minmax(0, 1fr)) 25% 100px;
          background-color: #f4f1ee;
          border-radius: 8px;
          `,
      HeaderRow: `
          background-color: #f4f1ee;
          `,
      Row: `
          background-color: #f4f1ee;
          `,
    },
  ]);

  const COLUMNS = [
    { label: "ID Orden", renderCell: (item: OrdersInterface) => item.id },
    {
      label: "Descripción",
      renderCell: (item: OrdersInterface) => item.descripcion,
    },
    {
      label: "Comensales",
      renderCell: (item: OrdersInterface) => item.comensales,
    },
    {
      label: "Tiempo Est.",
      renderCell: (item: OrdersInterface) => item.tiempo_estimado_preparacion,
    },
    {
      label: "Fecha Creación",
      renderCell: (item: OrdersInterface) => item.fecha_creacion,
    },
    {
      label: "Jefe de Cocina",
      renderCell: (item: OrdersInterface) => item.jefe_cocina_id,
    },
    {
      label: "Estado",
      renderCell: (item: OrdersInterface) => (
        <div>
          <LabelEstado
            title={item.estado}
            variant={item.estado.toString()}
            icon={item.estado.toString()}
          />
        </div>
      ),
    },
    {
      label: "Acciones",
      renderCell: (item: OrdersInterface) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button title="Ver" />
          <Button title="Editar" />
        </div>
      ),
    },
  ];

  return (
    <div className="contianer-grid-orders">
      <CompactTable
        columns={COLUMNS}
        data={data}
        theme={theme}
        layout={{ custom: false }}
      />
    </div>
  );
};
