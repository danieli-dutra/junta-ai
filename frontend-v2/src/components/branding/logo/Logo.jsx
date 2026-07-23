import logo from "@/logos/logo-junta-ai.svg";

export default function Logo({
  width = 180,
  height,
  className = "",
}) {
  return (
    <img
      src={logo}
      alt="Logo do Junta.ai"
      width={width}
      height={height}
      className={className}
    />
  );
}