import Document, { Head, Main, NextScript } from "next/document";

export default class Layout extends Document {
  render() {
    return (
      <html>
        <Head>
          <script>{`body { background-color: #069}`}</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
