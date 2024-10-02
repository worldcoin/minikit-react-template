import { ReactNode, Suspense, lazy } from "react";

const Eruda = lazy(() =>
  import("./eruda-provider").then((c) => ({ default: c.Eruda }))
);

export const ErudaProvider = (props: { children: ReactNode }) => {
  if (process.env.PROD) {
    return props.children;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Eruda>{props.children}</Eruda>
    </Suspense>
  );
};
