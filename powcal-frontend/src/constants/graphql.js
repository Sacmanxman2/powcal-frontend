import gql from 'graphql-tag'

export const ALL_EVENTS = gql`
  query AllEventsQuery {
    events {
      name
      id
      startDate
      endDate
    }
  }
`
