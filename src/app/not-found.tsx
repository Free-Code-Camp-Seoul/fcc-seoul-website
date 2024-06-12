"use client";

import React from "react";
import Error from "next/error";

export default function notFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
