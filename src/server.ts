//import figlet from "figlet"

const server = Bun.serve(
  {
    port: 3000,
    fetch(req) {
      const url = new URL(req.url);

      if (url.pathname === "/") {
        return new Response(
          Bun.file(
            './front/views/index.html',
            {
              headers: {
                'content-type': 'text/html'
              },
            }
          )
        )
      }

      if (url.pathname === "/assets/crm.js")
        return new Response(Bun.file('./public/crm.js'));

      if (url.pathname === "/assets/output.css")
        return new Response(Bun.file('./public/output.css'));

      return new Response('Page not found', {
        status: 404
      });
    }
  }
);

console.log(`Listening on http://localhost:${server.port} ...`);
