import fullLogo from "@/assets/logos/logo-full.svg";
import iconLogo from "@/assets/logos/logo-icon.svg";

const logos = {
  full: fullLogo,
  icon: iconLogo,
};

export default function Logo({
  variant = "full",
  width = 180,
  height,
  alt = "Junta.ai",
  className = "",
  ...props
}) {
  const src = logos[variant] ?? fullLogo;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      draggable={false}
      {...props}
    />
  );
}