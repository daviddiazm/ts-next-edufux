"use client";

import DialogMessage from "@/components/DialogMessage";
import TestBoard from "@/components/test/TestBoard";
import { useState } from "react"

const Test = () => {
  const [showDialog, setShowDialog] = useState(true);

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className='mt-24 w-screen flex flex-col justify-center items-center'>
      <div></div>
      {showDialog ? <DialogMessage onClose={closeDialog} /> : ''}
      <TestBoard />
    </div>
  );
};

export default Test;