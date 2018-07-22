let tracks = [
  {
    id: 1,
    artist: 'Waylon Jennings',
    song: 'Good Hearted Woman',
    genre: 'Country',
    rating: 3
  },
  {
    id: 2,
    artist: 'Patsy Cline',
    song: 'Crazy',
    genre: 'Country',
    rating: 5
  },
  {
    id: 3,
    artist: 'Patsy Cline',
    song: 'I Fall To Pieces',
    genre: 'Country',
    rating: 5
  },
  {
    id: 4,
    artist: 'Ace of Base',
    song: 'All That She Wants',
    genre: 'Pop',
    rating: 4
  },
  {
    id: 5,
    artist: 'Johnny Cash',
    song: 'A Boy Named Sue',
    genre: 'Country',
    rating: 3
  },
  {
    id: 6,
    artist: 'Dean Martin',
    song: 'Volare',
    genre: 'Pop',
    rating: 4
  },
  {
    id: 7,
    artist: 'Frank Sinatra',
    song: 'Thats Life',
    genre: 'Pop',
    rating: 3
  },
  {
    id: 8,
    artist: 'Marty Robbins',
    song: 'El Paso',
    genre: 'Country',
    rating: 5
  },
  {
    id: 9,
    artist: 'Hank Williams',
    song: 'Im So Lonesome I Could Cry ',
    genre: 'Country',
    rating: 4
  },
  {
    id: 10,
    artist: 'Joy Division',
    song: 'Love Will Tear Us Apart',
    genre: 'Alternative',
    rating: 4
  },
  {
    id: 11,
    artist: 'New Order',
    song: 'Age of Concent',
    genre: 'Alternative',
    rating: 2
  },
  {
    id: 12,
    artist: 'Cake',
    song: 'Never There',
    genre: 'Alternative',
    rating: 5
  },
  {
    id: 13,
    artist: 'Blondie',
    song: 'Heart Of Glass',
    genre: 'Rock',
    rating: 1
  },
  {
    id: 14,
    artist: 'Ghost',
    song: 'Cirice',
    genre: 'Metal',
    rating: 2
  },
  {
    id: 15,
    artist: 'Circa Survive',
    song: 'In Fear and Faith',
    genre: 'Alternative',
    rating: 2
  },
  {
    id: 16,
    artist: 'Mac Dre',
    song: 'Since 84',
    genre: 'Hip-Hop',
    rating: 5
  },
  {
    id: 17,
    artist: 'The Doors',
    song: 'Hyacinth House',
    genre: 'Rock',
    rating: 5
  },
  {
    id: 18,
    artist: 'Led Zeppelin',
    song: 'Houses Of The Holy',
    genre: 'Rock',
    rating: 4
  },
]


let id = 19;

module.exports = {
  getTracks: (req, res) => {
    res.send(tracks)
  }, 

  addTracks: (req, res) => {
    const { artist, song, genre, rating } = req.body
    console.log(req.body)
    let newTrack = {
      id, 
      artist,
      song,
      genre,
      rating: 0
    }
    tracks.push(newTrack)
    id++
    res.send(tracks)
  },

  deleteTracks: (req, res) => {
    const {id} = req.params
    // const id = req.params.id
    let index= tracks.findIndex(tracks => tracks.id === +id)
    
    if (index != -1){
      tracks.splice(index, 1)
    }
    res.send(tracks)
  },
  update: (req, res) => {
    const { id } = req.params
    let index= tracks.findIndex(tracks => tracks.id === +id)
    if( index !== -1) {
        tracks[index].rating = rating;
    }
  }
}
