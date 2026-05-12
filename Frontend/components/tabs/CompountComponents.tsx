"use client";
import { useEffect, useState } from "react";
import { Tab } from "./Tab";
import { Tabs } from "./Tabs";

interface pokemonData {
  count: number;
  next: number | null;
  previous: number | null;
  result: PokemonResult[];
}

interface PokemonResult {
  name: string;
  url: string;
}

export const CompountComponent = () => {
  return (
    <div>
      <Tabs>
        <Tab label={""}>{"url"}</Tab>
        <Tab label={""}>{"url"}</Tab>
        <Tab label={""}>{"url"}</Tab>
        <Tab label={""}>{"url"}</Tab>
      </Tabs>
    </div>
  );
};
