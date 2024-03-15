import app from "./app";
import prisma from "./prisma";

const port = process.env.PORT || 7576;

async function main() {
  app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
