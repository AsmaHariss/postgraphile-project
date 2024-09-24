const express = require('express');
const { postgraphile } = require('postgraphile');

const app = express();

app.use(
  postgraphile(
    process.env.DATABASE_URL || 'postgres://postgres:Admin@localhost:5432/task5',
    'public',
    {
      graphiql: true, //this enbales graphql schema
    }
  )
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
