import React from "react";

export interface HeaderData {
  label: string;
  href: string;
}

interface GuessNavProps {
  guessHeader: HeaderData[];
  children: (guessHeader: HeaderData[]) => JSX.Element;
}

export const GuessNav: React.FC<GuessNavProps> = ({ guessHeader, children }) => {
  return children(guessHeader);
};
