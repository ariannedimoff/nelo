import React, { useState } from 'react';

export const useModal = () => {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
      setVisible(!visible);
    };
    return { toggle, visible };
  };