const ProfilePage = ({ username }) => {
  return <div>{username}</div>;
};

export default ProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "ANA",
    },
  };
}
