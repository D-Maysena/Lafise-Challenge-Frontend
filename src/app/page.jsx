"use client";
import { useSidebarStore } from "@/store/useSidebarStore";
import Transferir from "./components/transferir/Transferir";
import Tablero from "./components/tablero/Tablero";
import MisTransacciones from "./components/mistransacciones/MisTransacciones";

export default function Home() {
  const { activeOption } = useSidebarStore();

  return (
    <div>
      <main>
        {activeOption === "transferir" ? (
          <Transferir />
        ) : activeOption === "mistransacciones" ? (
          <MisTransacciones />
        ) : (
          <Tablero />
        )}
      </main>
    </div>
  );
}
