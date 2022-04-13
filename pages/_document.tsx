import Document, { Head, Html, Main, NextScript } from "next/document";

class Layout extends Document<Layout> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head />
        <body className="w-full text-base text-white bg-bg-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Layout;
