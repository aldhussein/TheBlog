"use client";

import Footer from "@/components/footer";
import NavMenu from "@/components/navbar";




export default  function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

      <body className="w-full min-w-dvw">
        <NavMenu/>
        {children}
        <Footer/>
      </body>

  );
}
