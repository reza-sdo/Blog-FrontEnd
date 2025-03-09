export async function middlewareAuth(request) {
  const accessToken = request.cookies.get('accessToken');
  const refreshToken = request.cookies.get('refreshToken');
  const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    options
  );
  const data = await res.json();
  const userData = data?.data || {};
  return userData.user;
}
