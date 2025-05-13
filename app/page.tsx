"use client";

import { useState } from "react";
import SideBarWrapper from "../layouts/SideBarWrapper";
import Homepage from "../pages/HomePage";

export default function MainPage() {
  const [activeItem, setActiveItem] = useState(null); // State for active sidebar item

  return (
    <SideBarWrapper activeItem={activeItem} setActiveItem={setActiveItem}>
      <Homepage />
    </SideBarWrapper>
  );
}
