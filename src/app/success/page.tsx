import React from "react";
import HeaderBar from "@/components/HeaderBar";
import Header from "@/components/Header";

export default function success() {
  return (
    <main className="h-screen bg-gray-800">
      <HeaderBar color="red" />
      <Header />

      <div>
        <h3>Thank you for your message!</h3>
        <h4>I{"'"}ll get back to you shortly :)</h4>
      </div>
    </main>
  );
}
