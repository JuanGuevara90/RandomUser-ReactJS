export const fetchApiRandomUser = (Url) =>
fetch('https://randomuser.me/api/').then(res =>
res.json()
);