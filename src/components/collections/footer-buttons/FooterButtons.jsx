import Button from "../../basic/button/Button";

export default function FooterButtons({
  functionContinuar,
  functionVolver,
  functionGuardar,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
      <Button
        style={{ width: "242px", height: " 48px" }}
        typeStyle="primary"
        onClick={functionVolver}
      >
        Volver
      </Button>
      <Button
        style={{ width: "242px", height: " 48px" }}
        typeStyle="secondary"
        onClick={functionGuardar}
      >
        Guardar y salir
      </Button>
      <Button
        style={{ width: "242px", height: " 48px" }}
        typeStyle="secondary"
        onClick={functionContinuar}
      >
        Continuar
      </Button>
    </div>
  );
}
