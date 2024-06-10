import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { user, error, loading } = useGithubUser(username);

  return (
    <div>
      {user && (
        <>
          <img src={user.avatar_url} />
          <div>{user.login}</div>
          <div>{user.name}</div>
        </>
      )}
      {error && <div>{error.message}</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
