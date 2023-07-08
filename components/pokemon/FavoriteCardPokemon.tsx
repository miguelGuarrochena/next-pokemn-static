import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon = ({ pokemonId }: Props) => {
  const { push } = useRouter();

  const onFavoriteClicked = () => {
    push(`/pokemon/${pokemonId}`);
  };
  return (
    <Grid xs={6} sm={3} xl={1} key={pokemonId} onClick={onFavoriteClicked}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
