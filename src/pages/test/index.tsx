import Link from 'next/link';

export default function TestPage({ ip }) {
  return (
    <div>
      <h1>ip address: {ip}</h1>
      {/* <Link href="/about">
        <a>About</a>
      </Link> */}
    </div>
  );
}

// IndexPage.getInitialProps = async ({ req }) => {
//   const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
//   return { ip };
// };

export async function getServerSideProps({ req }) {
  console.log(req.headers);
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;

  return {
    props: {
      ip,
    }, // will be passed to the page component as props
  };
}
