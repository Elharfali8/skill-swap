'use client'

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null; 
    }

  return (
<div>
   {children}
</div>         
  )
}

export default Providers