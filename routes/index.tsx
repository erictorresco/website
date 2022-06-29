/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <Layout>
      <div class={tw`text-7xl text-center`}>Hello</div>
    </Layout>
  );
}
