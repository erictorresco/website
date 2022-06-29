/** @jsx h */

import { h, Fragment, ComponentChildren } from "preact";
import { tw } from "@twind";
import Navbar from "./Navbar.tsx";

export default function Layout(props: { children: ComponentChildren }) {
  return (
    <Fragment>
      <Navbar />
      <div class={tw`mx-auto max-w-7xl`}>{props.children}</div>
    </Fragment>
  );
}
