import React from "react";
import AutoWorksPlayer from "autoworks-player";

import 'autoworks-player/dist/AutoWorksPlayer.css'

import config from "./fixtures/config";
import items from "./fixtures/items";

const options = {
  items,
  ...config,
};

export default function Player() {
  return <AutoWorksPlayer {...options} />;
}

