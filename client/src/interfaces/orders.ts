export type Estados =
  | "Orden Creada"
  | "Despachada"
  | "Recibida"
  | "Entregada"
  | "En Preparacion";

export interface OrdersInterface {
  id: string;
  descripcion: string;
  estado: Estados;
  comensales: number;
  tiempo_estimado_preparacion: number;
  tiempo_despacho: number | null;
  fecha_creacion: string;
  jefe_cocina_id: string;
}
