import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src='//cdnt.netcoresmartech.com/smartechclient.js'></script>
        <script>
          smartech('create', 'ADGMOT35CHFLVDHBJNIG50K969FK3498PNA5EP5V1U13VG1BF9T0' );
          smartech('register', 'fe35f1bb2fc723b87184ce8eeb530303');
          smartech('identify', '');
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  );
}
