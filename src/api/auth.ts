export const signupUser = async (userData: any) => {
  const res = await fetch('https://healthprediction-y8k1.onrender.com/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return await res.json();
};

export const loginUser = async (userData: any) => {
  const res = await fetch('https://healthprediction-y8k1.onrender.com/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return await res.json();
};
