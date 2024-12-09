import Button from "../../basic/button/Button";

export default function FooterButtons({ btnContinuar, btnVolver, btnGuardar }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
      <Button
        style={{ width: "242px", height: " 48px" }}
        typeStyle="primary"
        {...btnVolver}
      >
        Volver
      </Button>
      <Button
        style={{ width: "242px", height: " 48px" }}
        typeStyle="secondary"
        {...btnGuardar}
      >
        Guardar y salir
      </Button>
      <Button
        style={{ width: "242px", height: " 48px" }}
        typeStyle="secondary"
        {...btnContinuar}
      >
        Continuar
      </Button>
    </div>
  );
}
