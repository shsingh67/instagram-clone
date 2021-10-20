import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signin({ providers }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p>
          This is just to practice my front end skills only. Not a REAL app.
          Cheerios!
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => {
                  SignIntoProvider(provider.id, { callbackUrl: "/" });
                }}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
