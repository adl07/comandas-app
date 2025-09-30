/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "../components/card/card";
import { Head } from "../components/head/head";
import "../App.css";
import { FilterOrder } from "../components/filterOrder/filterOrder";
import { getOrdersStates } from "../services/allOrdesStates";
import { useEffect, useState } from "react";
import { IconDefault } from "../components/ui/icons";
import type { Estados } from "../interfaces/orders";
import { Loader } from "../components/ui/loader";
import { GetAllRoles } from "../services/allRoles";


function Dashboard() {
  const [cards, setCards] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const data = await getOrdersStates();
      setCards(data);
      setLoading(false);
    } catch (error: any) {
      console.log("Error en getData", error);
      setLoading(true);
      throw new Error("Error en getData", error);
    }
  };

  const getRoles = async () => {
    try {
      const response = await GetAllRoles();
      console.log(response);
    } catch (error) {
      console.log("Error en getRoles", error);
      throw new Error("Error en getRoles", error);
    }
  };

  useEffect(() => {
    getData();
    getRoles();
  }, []);

  const IconsVariant: Record<Estados, React.ReactNode> = {
    "Orden Creada": <IconDefault name="deployed_code" />,
    "En Preparacion": <IconDefault name="schedule" />,
    Despachada: <IconDefault name="delivery_truck_bolt" />,
    Entregada: <IconDefault name="task_alt" />,
    Recibida: <IconDefault name="error" />,
  };

  return (
    <>
      <div className="container-dashboard">
        <Head />
        <div className={loading ? "contianer-loader" : "container-group-cards"}>
          {loading ? (
            <div className="contianer-loader">
              <Loader />
            </div>
          ) : (
            <>
              {cards.length > 0 &&
                cards.map((card: any) => (
                  <Card
                    key={card.id}
                    title={card.nombre}
                    icon={
                      <IconDefault
                        name={IconsVariant[card.nombre as Estados]}
                      />
                    }
                    quantity={card.quantity}
                    description={card.description}
                  />
                ))}
            </>
          )}
        </div>
        <FilterOrder />
      </div>
    </>
  );
}

export default Dashboard;
