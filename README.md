# Mirror project

Get started: 
`> npm install`
`> npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Will deploy the build to AWS. Requires a ~/.aws/credentials file to be present in the form of: 

```
[default]
aws_access_key_id = {accessKey}
aws_secret_access_key = {secretAccessKey}
```

## TO DO

### Clock
[x] Format clock so that time is on top (without seconds), date on bottom (without year)

### MBTA
[x] Display subway/bus icon for each stop
[x] Display upcoming arrivals for each stop

### Weather
[x] Display current weather icon
[ ] Display hourly graph of upcoming weather (temperature, percent chance of rain)
[x] Display upcoming daily forecast (day of week, high/low, weather icon)

### Calendar 
[ ] Create proxy function to get Yahoo.ics
[ ] Figure out how to get .ics from Google 
