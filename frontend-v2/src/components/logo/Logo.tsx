import logo from "@/assets/logos/logo-junta-ai.svg";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export function Logo({
  width = 180,
  height,
  className,
}: LogoProps) {
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