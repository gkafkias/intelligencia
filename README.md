# Intelligencia - Take at home test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run locally

In the root project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Tech stack

- React
- Redux Toolkit
- RTK Query
- Ant Design
- HighCharts

## Features

- [x] Display a paginated table with EFO term data fetched from the OLS API
- [x] Custom pagination managed through Redux & RTK Query
- [x] Results from the queries are cached
- [x] Display a chart with the frequency of the EFO term labels

## A few notes

- I wasn't sure about the last task of the test. My understanding was that the chart needs to show the frequency of each word from the term labels fetched in the table above. Not sure if that's what you meant, but I've implemented it that way.

- I've used the [Ant Design](https://ant.design/) library for the table and pagination components. I've never used it before, but I trusted the fact that you recommended it in the test description, so I went along with it.

- I've used the [HighCharts](https://www.highcharts.com/) library for the chart, like recommended in the description of the assessment.
