import { FC, Suspense } from "react"

export const withStore = (Component: FC) => () => (
  <Provider>
    <Component />
  </Provider>
)
