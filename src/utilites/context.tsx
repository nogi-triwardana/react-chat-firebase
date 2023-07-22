import React, { createContext } from 'react';

export type UserType = {
  uid: string
}

interface InterfaceLayoutContext {
  user: UserType | null
}

const initialValue: InterfaceLayoutContext = {
  user: null
}

export const LayoutContext = createContext<InterfaceLayoutContext>(initialValue);