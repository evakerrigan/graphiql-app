export default `
query rickAndMorty {
  characters(page: 2, filter: { name: "" }) {
    info {
      count
    }
    results {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        id
      }
      location {
        name
        id
      }
      image
      episode {
        id
      }
      created
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
