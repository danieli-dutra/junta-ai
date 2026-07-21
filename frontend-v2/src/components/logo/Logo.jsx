import logo from "@/assets/logos/logo-junta-ai.svg";

export function Logo({
  width = 180,
  height,
  className,
}) {
  return (
    <img
      src={logo}
      alt="Junta.ai"
      width={width}
      height={height}
      className={className}
    />
  );
}