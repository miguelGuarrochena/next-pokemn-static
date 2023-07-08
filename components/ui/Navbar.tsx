import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 50px",
        backgroundColor: theme?.colors.gray400.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />

      <Link href="/">
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okémon
        </Text>
      </Link>

      <Spacer
        css={{
          flex: 1,
        }}
      />
      <Link href="/favorites">
        <Text color="white" h3>
          favoritos
        </Text>
      </Link>
    </div>
  );
};
