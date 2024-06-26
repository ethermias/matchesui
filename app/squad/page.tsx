'use client'
import React, { useState } from "react";
import AddSquad from "../../components/squad/addSquad"
import Winner from "@/components/winner";
import Schedule from "@/components/schedule";
import Rules from "../rules/page"; "@/components/static/rules";
export default function Home() {
  return (
    <>
      <AddSquad />
      <Schedule />
      <Winner />
      <Rules />
    </>
  )
}