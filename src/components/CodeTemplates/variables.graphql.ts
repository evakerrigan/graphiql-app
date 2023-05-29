export default `
query a($name: String) {
  characters(page: 2, filter: {name: $name}) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;
