const PORT = process.env?.PORT || 3030;
import app from './app';

app.listen(PORT, () =>
    console.log(`App is running on port ${PORT}`)
);