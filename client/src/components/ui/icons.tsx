
interface IconProps {
    name: string | React.ReactNode;              
    fill?: 0 | 1;           
    weight?: number;           
    grade?: number;            // contraste (-25 a 200)
    opsz?: number;             // tamaño óptico (20–48)
    size?: number | string;    // tamaño CSS (px, rem, etc.)
    color?: string;            // color CSS
  }

  export const IconDefault = ({
    name,
    fill = 0,
    weight = 400,
    grade = 0,
    opsz = 48,
    size = 24,
    color = "inherit",
  }: IconProps) => {
    return (
      <span
        className="material-symbols-outlined"
        style={{
          fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
          fontSize: size,
          color: color,
        }}
      >
        {name}
      </span>
    );
  };


