import React, { useState } from "react";
import { useBetween } from "use-between";

const useFormState = () => {
    const [date, setDate] = useState({date: "09/29/21"});
    return {
      date,
      setDate,
    };
  };

export default function() { useBetween(useFormState); }